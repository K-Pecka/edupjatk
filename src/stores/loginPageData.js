const loginData = {
    formFields:[{
        name:'email',
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
        name:'password',
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
    style:{
        form:{
            border:'5px solid #efefef',
            padding:'2em',
            'border-radius':'15px',
        }
    },
    button:{
        class:['btn', 'btn-primary'],
        label:"Zaloguj się"
    }
}
export default loginData