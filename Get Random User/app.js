const app = Vue.createApp({
	// template: '<h1>Hello {{ firstName }}!</h1>',
	data() {
		return {
			firstName: 'John',
			lastName: 'Doe',
			email: 'John@gmail.com',
			gender: 'male',
			picture: 'https://randomuser.me/api/portraits/men/10.jpg',
		};
	},
	methods: {
		async getUser() {
			const res = await fetch('https://randomuser.me/api/');
			const {
				results
			} = await res.json();

            const {
                email,
                name: { first, last },
                picture: { large },
                gender,
            } = results[0];

			this.firstName = first;
			this.lastName = last;
			this.email = email;
			this.gender = gender;
			this.picture = large;
		},
	},
});

app.mount('#app');
