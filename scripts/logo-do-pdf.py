"""Gera os SVGs da logo a partir do PDF vetorial.

Uso: python scripts/logo-do-pdf.py caminho/Logo__BobSom__COR.pdf
So precisa rodar de novo se a logo mudar. Requer PyMuPDF.
"""
import sys
import pymupdf

SAIDA = "public/img"
TODOS = range(18)
PALAVRA = [0, 1, 2, 3, 4, 14, 15, 16, 17]
SIMBOLO = [14, 15, 16, 17]


def caminho(desenho):
    partes = []
    atual = None
    for item in desenho["items"]:
        tipo = item[0]
        if tipo == "l":
            a, b = item[1], item[2]
            if atual is None or abs(atual.x - a.x) > 1e-3 or abs(atual.y - a.y) > 1e-3:
                partes.append(f"M{a.x:.3f} {a.y:.3f}")
            partes.append(f"L{b.x:.3f} {b.y:.3f}")
            atual = b
        elif tipo == "c":
            a, c1, c2, b = item[1], item[2], item[3], item[4]
            if atual is None or abs(atual.x - a.x) > 1e-3 or abs(atual.y - a.y) > 1e-3:
                partes.append(f"M{a.x:.3f} {a.y:.3f}")
            partes.append(f"C{c1.x:.3f} {c1.y:.3f} {c2.x:.3f} {c2.y:.3f} {b.x:.3f} {b.y:.3f}")
            atual = b
        elif tipo == "re":
            r = item[1]
            partes.append(f"M{r.x0:.3f} {r.y0:.3f}H{r.x1:.3f}V{r.y1:.3f}H{r.x0:.3f}Z")
            atual = None
        else:
            raise ValueError(f"item nao suportado: {tipo}")
    return "".join(partes) + "Z"


def cor(desenho, cinza):
    r, g, b = (round(x * 255) for x in desenho["fill"])
    hexa = f"#{r:02X}{g:02X}{b:02X}"
    return cinza if hexa == "#6D6E71" else hexa


def svg(desenhos, indices, cinza="#6D6E71", titulo="BobSom Produções", fundo=None, margem=0.0):
    x0 = min(desenhos[i]["rect"].x0 for i in indices) - margem
    y0 = min(desenhos[i]["rect"].y0 for i in indices) - margem
    x1 = max(desenhos[i]["rect"].x1 for i in indices) + margem
    y1 = max(desenhos[i]["rect"].y1 for i in indices) + margem
    w, h = x1 - x0, y1 - y0
    corpo = ""
    if fundo:
        corpo += f'<rect x="{x0:.3f}" y="{y0:.3f}" width="{w:.3f}" height="{h:.3f}" fill="{fundo}"/>'
    for i in indices:
        d = desenhos[i]
        regra = ' fill-rule="evenodd"' if d.get("even_odd") else ""
        corpo += f'<path fill="{cor(d, cinza)}"{regra} d="{caminho(d)}"/>'
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0:.3f} {y0:.3f} {w:.3f} {h:.3f}" '
        f'role="img" aria-label="{titulo}"><title>{titulo}</title>{corpo}</svg>\n'
    )


def main():
    desenhos = pymupdf.open(sys.argv[1])[0].get_drawings()
    assert len(desenhos) == 18, "a logo mudou: revise os indices"
    # Claro para o fundo escuro do site; o cinza original fica para fundo branco (impressao).
    arquivos = {
        "logo.svg": svg(desenhos, TODOS, cinza="#A7A9AC"),
        "logo-original.svg": svg(desenhos, TODOS),
        "logo-palavra.svg": svg(desenhos, PALAVRA, cinza="#A7A9AC"),
        "simbolo.svg": svg(desenhos, SIMBOLO, cinza="#A7A9AC"),
        "favicon.svg": svg(desenhos, SIMBOLO, cinza="#A7A9AC", fundo="#000000", margem=14),
    }
    for nome, conteudo in arquivos.items():
        with open(f"{SAIDA}/{nome}", "w", encoding="utf-8") as f:
            f.write(conteudo)
        print(nome, len(conteudo))


if __name__ == "__main__":
    main()
