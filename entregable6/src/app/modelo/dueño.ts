export class Dueño {

	public idDuenio: number;
	public nombre: String;
	public apellido: String; 
	public telefono: String;
	public email: String;
    public password: String;



    /*public constructor(idDueño:Number,nombre:String, apellido:String , telefono: String, email: String,password : String){
        this._idDueño=idDueño;
        this._nombre=nombre;
        this._apellido=apellido;
        this._telefono=telefono;
        this._email=email;
        this._password=password;
    }*/
    public constructor(){
        
    }
    public get getIdDuenio(): Number {
        return this.idDuenio;
    }
    public set setIdDuenio(value: Number) {
        this.idDuenio = value;
    }


    public get getNombre(): String {
        return this.nombre;
    }
    public set setNombre(value: String) {
        this.nombre = value;
    }

    public get getApellido(): String {
        return this.apellido;
    }
    public set setApellido(value: String) {
        this.apellido = value;
    }
    public get getTelefono(): String {
        return this.telefono;
    }
    public set setTelefono(value: String) {
        this.telefono = value;
    }
    public get getEmail(): String {
        return this.email;
    }
    public set setEmail(value: String) {
        this.email = value;
    }
    public get getPassword(): String {
        return this.password;
    }
    public set setPassword(value: String) {
        this.password = value;
    }
	
}
