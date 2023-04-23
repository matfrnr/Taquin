// Le button "calcul de la moyenne"
const btnMoyenne = document.getElementById('btn-moyenne');

// Les deux inputs contenant les notes
const noteDS = document.getElementById('note-ds');
const noteQuizz = document.getElementById('note-quizz');


// Ajouter un gestionnaire d'évènement pour le clic sur btnMoyenne
    btnMoyenne.addEventListener("click", function ()
    {
        const note1 = parseInt(noteDS.value);
        const note2 = parseInt(noteQuizz.value);
        if(note1 < 0 || note1 >20 || note2 <0 || note2>20 || isNaN(note1) || isNaN(note2)) {
            document.write("Erreur")
        }
        else{
            const moyenne = (note1 + note2) / 2;
            document.write(moyenne);
        }


    });
