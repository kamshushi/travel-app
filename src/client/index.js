import './styles/main.scss';
import './styles/form.scss';
import './styles/trips.scss';
import { addForm} from './js/addForm';


document.getElementById('submit').addEventListener('click',function(e){
    addForm(e)
})

document.querySelector('.new-trip').addEventListener('click',function(){
    document.querySelector('.form-container').classList.toggle('hide')
})


export{
    addForm,
}