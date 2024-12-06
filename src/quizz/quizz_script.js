const questions = [
    {
        "question": "Quel système du corps humain peut-on comparer aux courants marins et à la pompe thermohaline ?",
        "choices": {
            "A": "Le système nerveux",
            "B": "Le système digestif",
            "C": "Le système circulatoire",
            "D": "Le système respiratoire"
        },
        "correctAnswer": "C",
        "explanation": "Les courants marins et la pompe thermohaline transportent la chaleur et les nutriments à travers l'océan, tout comme le système circulatoire humain transporte le sang, l’oxygène et les nutriments à travers le corps pour maintenir son bon fonctionnement."
    },
    {
        "question": "Quel rôle des poumons humains trouve son équivalent dans l’océan grâce à la photosynthèse ?",
        "choices": {
            "A": "La régulation de la température corporelle",
            "B": "L'échange de gaz (CO2 et O2)",
            "C": "La filtration des toxines",
            "D": "La production d'énergie"
        },
        "correctAnswer": "B",
        "explanation": "La photosynthèse réalisée par le phytoplancton dans l’océan permet de libérer de l’oxygène et d’absorber le dioxyde de carbone, un processus semblable à celui des poumons, qui assurent l’échange de ces mêmes gaz entre l’air et le sang."
    },
    {
        "question": "Quel élément du corps humain peut être assimilé au rôle du plancton dans l’océan ?",
        "choices": {
            "A": "Les os",
            "B": "Les cellules vivantes ou les globules rouges",
            "C": "Les poumons",
            "D": "Les neurones"
        },
        "correctAnswer": "B",
        "explanation": "Le plancton est à la base de la chaîne alimentaire marine et joue un rôle crucial dans la production d’oxygène. Il est comparable aux cellules vivantes ou aux globules rouges du corps humain, qui transportent l’oxygène et permettent la vie de l’ensemble des systèmes du corps."
    },
    {
        "question": "Quel processus océanique essentiel pour le climat global est comparable à la transpiration du corps humain ?",
        "choices": {
            "A": "La montée des marées",
            "B": "La circulation thermohaline",
            "C": "La formation des récifs coralliens",
            "D": "L’évaporation des eaux de surface"
        },
        "correctAnswer": "B",
        "explanation": "La circulation thermohaline transporte la chaleur à travers l’océan, régulant ainsi le climat global, tout comme la transpiration aide le corps humain à maintenir sa température interne stable en dissipant la chaleur."
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    if (currentQuestionIndex >= questions.length) {
        quizContainer.innerHTML = "<h2>Quiz terminé ! 🎉</h2>";
        localStorage.setItem("games_completed",1);
        return;
    }

    const question = questions[currentQuestionIndex];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionTitle = document.createElement('h2');
    questionTitle.textContent = `${currentQuestionIndex + 1}. ${question.question}`;
    questionDiv.appendChild(questionTitle);

    const choicesDiv = document.createElement('div');
    choicesDiv.classList.add('choices');

    Object.entries(question.choices).forEach(([key, choice]) => {
        const button = document.createElement('button');
        button.textContent = `${key}) ${choice}`;
        button.onclick = () =>
            checkAnswer(key, button, choicesDiv, question.correctAnswer, question.explanation);
        choicesDiv.appendChild(button);
    });

    questionDiv.appendChild(choicesDiv);

    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback');
    questionDiv.appendChild(feedbackDiv);

    quizContainer.appendChild(questionDiv);
}

function checkAnswer(selectedAnswer, button, choicesDiv, correctAnswer, explanation) {
    const feedback = choicesDiv.nextElementSibling;

    choicesDiv.querySelectorAll('button').forEach((btn) => {
        btn.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {
        feedback.textContent = "Bonne réponse ! 🎉 " + explanation + "\n";
        feedback.classList.add('correct');
    } else {
        feedback.textContent = `Mauvaise réponse. La bonne réponse était ${correctAnswer}. ${explanation}\n`;
        feedback.classList.add('incorrect');
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = "Suivant";
    nextButton.onclick = () => {
        currentQuestionIndex++;
        showQuestion();
    };
    feedback.appendChild(nextButton);
}

showQuestion();
