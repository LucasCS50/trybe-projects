let removeSon = document.querySelector('#pai').children;

for (let i = removeSon.length - 1; i >= 0; i -= 1) {
    
    let fck = document.getElementById('pai');
        if (removeSon[i].id !== 'elementoOndeVoceEsta') {
            fck.removeChild(removeSon[i]);
        }
    }

let excluir = document.getElementById('elementoOndeVoceEsta');
excluir.removeChild(excluir.children[1]);