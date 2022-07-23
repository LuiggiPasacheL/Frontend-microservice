
import Cookies from 'universal-cookie';

class CookieHelper{

	cookies = new Cookies();
	
	setId(id){
		this.cookies.set('id', id, {path: '/'});
	}

	setNombre(nombre){
		this.cookies.set('nombrealu', nombre, {path: '/'});
	}

	getId(){
		let id = this.cookies.get('id')
		console.log('id = ' + id);
		return id;
	}

	getNombre(){
		let nombre = this.cookies.get('nombre')
		console.log('nombre alumno = ' + nombre);
		return nombre;
	}
}

export default new CookieHelper();