const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User{

    constructor(obj){
		Object.assign(this,obj)
	}
    render(){

		return document.write
		(`<div class = "users">
			<div class = "user">
				<div class="user__info">
					<div class="user__info--data">
						<img src="images/users/${this.img}.png" alt="${this.name}" height="50">
						<div class="user__naming">
							<p>Name: <b>${this.name}</b></p>
							<p>Age: <b>${this.age}</b></p>
						</div>
					</div>
						<div class="user__info--role ${this.role}">
							<img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
							<p>${this.role}</p>
						</div> 
					</div> 
					<div class="user__courses">
					${this.renderCourses()}
					</div>
			</div>
		  </div> `
		 
		 )
	}

    renderCourses(){
		
		function getMark(mark){
			for (let key in gradation) {
			
				if(mark <= key)return gradation[key];
		
			}
		}
		
		
		
		if(this.courses){
			 return this.courses.map(course => {
				return(` <p class="user__courses--course student">${course.title} <span class="${getMark(course.mark)}">${getMark(course.mark)}</span></p>`)
		   });
		}
		else{
			return ``;
		}

		
		
	}
}

class Student extends User{
	constructor(obj){
		super(obj);
	}
}

class Lector extends User{
	constructor(obj){
		super(obj);
	}
	renderCourses(score){
		function getMark(mark){
			for (let key in gradation) {
			
				if(mark <= key)return gradation[key];
		
			}
		}

		if(this.courses){
			 return this.courses.map(course => {
				return(` 
				<div class="user__courses admin--info">
					<div class="user__courses--course lector">
						<p>Title: <b>${course.title}</b></p>
						<p>Lector's score: <span class="${getMark(course.score)}">${getMark(course.score)}</span></p>
						<p>Average student's score: <span class="${getMark(course.studentsScore)}">${getMark(course.studentsScore)}</span></p>
					</div>
				</div>
				</div>
				`
					
				)
		   });
		}
		else{
			return ``;
		}
	}
}
class Admin extends User{
	constructor(obj){
		super(obj);
	}
	renderCourses(score){
		function getMark(mark){
			for (let key in gradation) {
			
				if(mark <= key)return gradation[key];
		
			}
		}

		if(this.courses){
			 return this.courses.map(course => {
				return(` 
				<div class="user__courses admin--info">
					<div class="user__courses--course admin">
						<p>Title: <b>${course.title}</b></p>
						<p>Admin's score: <span class="${getMark(course.score)}">${getMark(course.score)}</span></p>
						<p>Lector: <b>${course.lector}</b></p>
					</div>
				</div>`
				)
		   });
		}
		else{
			return ``;
		}

		
		
	}
}


const User_Type = {
	 
	student: user => new Student(user).render(),
    lector: user => new Lector(user).render(),
    admin: user => new Admin(user).render()
}

let newUsers = users.map(user =>{

	let userRole = user.role;
	return User_Type[userRole] ? User_Type[userRole](user) : new User(user);


})




