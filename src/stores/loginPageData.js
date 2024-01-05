const loginData = {
    formFields:[{
        label:'Username:',
        type:'text',
        placeholder:'Podaj login',
        class:{
            label:['form-label'],
            input:['form-control']
        },
        attribute:{
            required:true,
        }
    },{
        label:'Password:',
        type:'password',
        placeholder:'Podaj hasło',
        class:{
            label:['form-label'],
            input:['form-control']
        },
        attribute:{
            required:true
        }
    }],
    className:['mb-3'],
    button:{
        class:['btn', 'btn-primary'],
        label:"Zaloguj się"
    }
}
export default loginData