const btn = document.getElementById('btnPrint');

btn.addEventListener("click", (evt) => {
    const conteudoPag = document.getElementById("conteudo").innerHTML;

    const wind = window.open('', '', 'height=700, width=700')

    wind.document.write('<html><head>')
    wind.document.write('<title>HTML em PDF</title>')
    wind.document.write('</head><body>')
    wind.document.write(conteudoPag)
    wind.document.write('</body></html>');

    wind.print()

})
