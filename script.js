document.addEventListener('DOMContentLoaded', function()
{
    const input_field = document.getElementById('name_input');
    const add_name = document.getElementById('add');
    const random_name = document.getElementById('random_los');
    const names_array = document.getElementById('all_names');
    const win_name = document.getElementById('name_win');
    const alert_win = document.getElementById('alert');
    let added_names = [];
    let counter = 0;




    error.setAttribute('disabled','disabled');

    random_name.setAttribute('disabled','disabled');


    add_name.addEventListener('click', function()
    {
        
        if(added_names.length >= 1)
        {
            random_name.removeAttribute('disabled');
        }

        let name = input_field.value;

        if(name == "")
        {
            let error_msg = '<div class="alert alert-danger" role="alert">';
            error_msg += 'Podałes nieprawdiłową wartosc';
            error_msg += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>';
            document.getElementById('error').innerHTML = error_msg;
        }

        else
        {
            added_names.push(name);
            
            let newDiv = document.createElement('div');
            newDiv.classList.add('player');
            let position = document.createElement('span');
            position.innerText = name;
            let deleteBTN = document.createElement('button');
            deleteBTN.classList.add('btn');
            deleteBTN.classList.add('btn-danger');
            deleteBTN.innerText = 'X';

            //newDiv.appendChild(numberDiv);
            newDiv.appendChild(position);
            newDiv.appendChild(deleteBTN);
            newDiv.style.display = 'none';

            names_array.appendChild(newDiv);


            input_field.value = "";

            $(newDiv).fadeIn(600);

            deleteBTN.addEventListener('click', function()
            {
                $(newDiv).fadeOut(600);
                setInterval(function()
                {
                    newDiv.remove();
                },600);
                const delName = added_names.indexOf(name);
                added_names.splice(delName,1);
            })

        }

    });

    random_name.addEventListener('click', function()
    {
        if(added_names.length === 0)
        {
            document.getElementById('name').innerHTML = "Brak imion do losowania";
        }
        else
        {
            const number = RandomNumber(added_names.length);
            document.getElementById('name').innerHTML = added_names[number];
        }
    })

})

function RandomNumber(length)
{
    return Math.floor(Math.random() * length);
}
