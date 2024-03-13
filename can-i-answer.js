export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
}

export const disposableDB = {
    probablyWords: ["cumprimento", "saudação", "interação", "conversa", "conhecimento", "informação", "futebol", "esporte" ],
    matched: 0,
}

export const wordDB = [palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula, disposableDB]

function showAnswer(index) {

        switch (index) {
            case 0:
                return "Quem fundou a escola foi XYZXAS, ele era ABC"
            break;

            case 1:
                return "Oferecemos os cursos técnicos XYZXAADJASD"
            break;

            case 2:
                return "Para matricular Deve ser feito XYZ, e para matricular ABC"
            break;

            case 3:
                return "Assunto sem coerência"
            break;
        }
}

export function mostProbablyQuestion() {
    let matches = [
        palavrasEscolaFundador.matched,
        palavrasCursosTecnicos.matched, 
        palavrasMatricula.matched,
        disposableDB.matched,
    ]

    for(let i = 0; i < wordDB.length - 1; ++i){
        if(disposableDB.matched >= wordDB[i].matched){
           disposableDB.matched++
        }
    }
    
    return showAnswer(matches.indexOf(Math.max(...matches)))
}
