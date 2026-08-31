/*
 * SkillMatch JS
 * Mini-Projeto Avaliativo - Módulo 01
 * Programação Front-End React - IFSC
 *
 * Este arquivo contém a lógica principal do projeto SkillMatch JS.
 *
 * O objetivo do sistema é comparar as habilidades de uma pessoa candidata
 * com os requisitos de vagas fictícias para Front-End Júnior.
 *
 * O programa deverá analisar:
 * - habilidades que o candidato possui;
 * - requisitos exigidos pelas vagas;
 * - habilidades faltantes;
 * - percentual de compatibilidade;
 * - classificação da compatibilidade;
 * - vaga com maior compatibilidade;
 * - recomendação de estudo.
 *
 * Autor: Clovis Mariano da Costa
 * Status: Em desenvolvimento
 */
// ==============================
// PERFIL DO CANDIDATO
// ==============================

const candidato = {
    nome: "Clovis Mariano da Costa", 
    areaInteresse: "Desenvolvimento Front-End", 
    habilidades: [
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub"
    ],
    tempoExperienciaMeses: 0 // em meses - experiência profissional formal

};

// ==============================
// VAGAS
// ==============================

const vagas = [
    {
        tituloVaga: "Desenvolvedor Front-End Júnior",
        empresa: "Tech Namor Solutions Ltda.",
        modalidade: "Remoto",
        localizacao: "Florianópolis/SC",    
        requisitos: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        salario: 3500
    },
    {
        tituloVaga: "Desenvolvedor Front-End Júnior",
        empresa: "Inovação Digital e Comportamental Ltda.",
        modalidade: "Remoto",   
        localizacao: "Florianópolis/SC",            
        requisitos: [
            "HTML",
            "CSS",
            "JavaScript",
            "Git"
        ],
        salario: 4500
    },
    {
        tituloVaga: "Desenvolvedor Front-End Júnior",
        empresa: "CodeWave Sistemas Ltda.",
        modalidade: "Remoto",       
        localizacao: "Florianópolis/SC",    
        requisitos: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "TypeScript"
        ],
        salario: 4500
    }
];