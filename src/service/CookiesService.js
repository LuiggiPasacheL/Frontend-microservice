
import Cookies from 'universal-cookie';

class CookieHelper{

	cookies = new Cookies();
	
	setId(id){
		this.cookies.set('id', id, {path: '/'});
	}

	getId(){
		let id = this.cookies.get('id')
		console.log('id = ' + id);
		return id;
	}
}

export default new CookieHelper();