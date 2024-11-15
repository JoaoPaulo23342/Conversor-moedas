from django.shortcuts import render



def index(request):
    data = {
    1: {"nome": "Nebulosa de carina",
        "legenda": "webbtelecospe.org /NASA /James Webb"},
    2: {"nome": "Galáxia NGC 1079",
        "legenda": "Nasa.ong / NASA / Hubble"}
    }

    return render(request, 'galeria/index.html', {"cards": data})

def imagem(request):
    return render(request, 'galeria/imagem.html')