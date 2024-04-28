
new Vue({
    el: '#time',
    data: {
      targetDate: new Date('2024-07-27T00:00:00'), // Установка целевой даты
      remainingTime: '' // Оставшееся время
    },
    mounted() {
      setInterval(this.updateTime, 1000); // Обновление времени каждую секунду
    },
    methods: {
      updateTime() {
        const currentDate = new Date();
        const difference = this.targetDate.getTime() - currentDate.getTime();
  
        // Вычисление оставшегося времени
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        // Форматирование оставшегося времени
        this.remainingTime = `${days} : ${hours} : ${minutes} : ${seconds}`;
      }
    }
  });

  
//   
new Vue({
    el: '#app',
    data: {
        email: '',
        popupMessage: '',
        success: false,
        error: false
    },
    methods: {
        submitForm() {
            // Validate email format
            if (!this.validateEmail(this.email)) {
                this.showPopup('Invalid email address');
                return;
            }

            axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                if (response.status === 200) {
                    this.showPopup('Subscription successful!');
                    this.success = true;
                    this.error = false;
                } else {
                    this.showPopup('Failed to execute date');
                    this.error = true;
                    this.success = false;
                }
                return response
            })
            .catch(error => {
                console.error(error);
                this.showPopup('Failed to execute date');
                this.error = true;
                this.success = false;
            });
        },
        validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
        showPopup(message) {
            this.popupMessage = message;
            setTimeout(() => {
                this.popupMessage = '';
            }, 3000);
        }
    }
});


