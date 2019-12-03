export class Dueño {

	public _idDuenio: Number;
	public _nombre: String;
	public _apellido: String; 
	public _telefono: String;
	public _email: String;
    public _password: String;



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


    public get nombre(): String {
        return this._nombre;
    }
    public set nombre(value: String) {
        this._nombre = value;
    }

    public get apellido(): String {
        return this._apellido;
    }
    public set apellido(value: String) {
        this._apellido = value;
    }
    public get telefono(): String {
        return this._telefono;
    }
    public set telefono(value: String) {
        this._telefono = value;
    }
    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }
    public get password(): String {
        return this._password;
    }
    public set password(value: String) {
        this._password = value;
    }
	
}
