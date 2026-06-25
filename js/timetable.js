Vue.component("class-session", {
    props: ["session", "selectedIds"],
    template: `
        <article
            class="session-card"
            :class="[session.typeClass, { 'is-selected': selectedIds.includes(session.id) }]"
        >
            <div class="session-topline">
                <span class="session-day">{{ session.day }}</span>
                <span class="session-time">{{ session.time }}</span>
            </div>

            <h3>{{ session.title }}</h3>

            <span class="class-type">{{ session.type }}</span>

            <p class="session-details">
                {{ session.level }} | {{ session.location }}
            </p>

            <button class="session-select" type="button" @click="$emit('select-session', session.id)">
                {{ selectedIds.includes(session.id) ? "Unselect Class" : "Select Class" }}
            </button>
        </article>
    `
});

new Vue({
    el: "#timetableApp",

    data: {
        selectedDay: "All",
        selectedTime: "All",
        selectedSessionIds: [],

        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        message: "",
        formError: "",

        days: ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

        timeOptions: ["All", "Morning", "Afternoon", "Evening"],

        sessions: [
            {
                id: 1,
                day: "Monday",
                time: "8:30 AM",
                period: "Morning",
                title: "Parent and Baby Swim",
                type: "Parent Class",
                level: "Ages 6 months to 3 years",
                location: "Teaching Pool",
                typeClass: "type-parent"
            },
            {
                id: 2,
                day: "Monday",
                time: "9:30 AM",
                period: "Morning",
                title: "Water Confidence",
                type: "Kids Lessons",
                level: "Beginner",
                location: "Teaching Pool",
                typeClass: "type-learn"
            },
            {
                id: 3,
                day: "Monday",
                time: "4:00 PM",
                period: "Afternoon",
                title: "Learn to Swim",
                type: "Kids Lessons",
                level: "Beginner",
                location: "Teaching Pool",
                typeClass: "type-learn"
            },
            {
                id: 4,
                day: "Tuesday",
                time: "10:00 AM",
                period: "Morning",
                title: "Parent and Toddler Swim",
                type: "Parent Class",
                level: "Ages 2 to 4 years",
                location: "Teaching Pool",
                typeClass: "type-parent"
            },
            {
                id: 5,
                day: "Tuesday",
                time: "4:30 PM",
                period: "Afternoon",
                title: "Learn to Swim",
                type: "Kids Lessons",
                level: "Beginner",
                location: "Teaching Pool",
                typeClass: "type-learn"
            },
            {
                id: 6,
                day: "Tuesday",
                time: "5:30 PM",
                period: "Evening",
                title: "Stroke Development",
                type: "Skill Class",
                level: "Intermediate",
                location: "Main Pool",
                typeClass: "type-stroke"
            },
            {
                id: 7,
                day: "Tuesday",
                time: "6:30 PM",
                period: "Evening",
                title: "Adult Beginner Swim",
                type: "Adult Program",
                level: "Beginner",
                location: "Main Pool",
                typeClass: "type-adult"
            },
            {
                id: 8,
                day: "Wednesday",
                time: "9:00 AM",
                period: "Morning",
                title: "Lap Swimming",
                type: "Fitness Swim",
                level: "Adults",
                location: "Lap Lanes",
                typeClass: "type-lap"
            },
            {
                id: 9,
                day: "Wednesday",
                time: "10:30 AM",
                period: "Morning",
                title: "Water Confidence",
                type: "Kids Lessons",
                level: "Beginner",
                location: "Teaching Pool",
                typeClass: "type-learn"
            },
            {
                id: 10,
                day: "Wednesday",
                time: "4:30 PM",
                period: "Afternoon",
                title: "Learn to Swim",
                type: "Kids Lessons",
                level: "Beginner",
                location: "Teaching Pool",
                typeClass: "type-learn"
            },
            {
                id: 11,
                day: "Wednesday",
                time: "6:00 PM",
                period: "Evening",
                title: "Adult Fitness Swim",
                type: "Adult Program",
                level: "Fitness",
                location: "Lap Lanes",
                typeClass: "type-adult"
            },
            {
                id: 12,
                day: "Thursday",
                time: "9:30 AM",
                period: "Morning",
                title: "Parent and Baby Swim",
                type: "Parent Class",
                level: "Ages 6 months to 3 years",
                location: "Teaching Pool",
                typeClass: "type-parent"
            },
            {
                id: 13,
                day: "Thursday",
                time: "4:00 PM",
                period: "Afternoon",
                title: "Water Confidence",
                type: "Kids Lessons",
                level: "Beginner",
                location: "Teaching Pool",
                typeClass: "type-learn"
            },
            {
                id: 14,
                day: "Thursday",
                time: "5:30 PM",
                period: "Evening",
                title: "Stroke Development",
                type: "Skill Class",
                level: "Intermediate",
                location: "Main Pool",
                typeClass: "type-stroke"
            },
            {
                id: 15,
                day: "Thursday",
                time: "6:30 PM",
                period: "Evening",
                title: "Adult Beginner Swim",
                type: "Adult Program",
                level: "Beginner",
                location: "Main Pool",
                typeClass: "type-adult"
            },
            {
                id: 16,
                day: "Friday",
                time: "9:00 AM",
                period: "Morning",
                title: "Lap Swimming",
                type: "Fitness Swim",
                level: "Adults",
                location: "Lap Lanes",
                typeClass: "type-lap"
            },
            {
                id: 17,
                day: "Friday",
                time: "4:00 PM",
                period: "Afternoon",
                title: "Learn to Swim",
                type: "Kids Lessons",
                level: "Beginner",
                location: "Teaching Pool",
                typeClass: "type-learn"
            },
            {
                id: 18,
                day: "Friday",
                time: "5:00 PM",
                period: "Evening",
                title: "Stroke Development",
                type: "Skill Class",
                level: "Intermediate",
                location: "Main Pool",
                typeClass: "type-stroke"
            },
            {
                id: 19,
                day: "Saturday",
                time: "8:30 AM",
                period: "Morning",
                title: "Parent and Toddler Swim",
                type: "Parent Class",
                level: "Ages 2 to 4 years",
                location: "Teaching Pool",
                typeClass: "type-parent"
            },
            {
                id: 20,
                day: "Saturday",
                time: "9:30 AM",
                period: "Morning",
                title: "Holiday Swim Camp",
                type: "Swim Camp",
                level: "Mixed Levels",
                location: "Main Pool",
                typeClass: "type-camp"
            },
            {
                id: 21,
                day: "Saturday",
                time: "11:00 AM",
                period: "Morning",
                title: "Learn to Swim",
                type: "Kids Lessons",
                level: "Beginner",
                location: "Teaching Pool",
                typeClass: "type-learn"
            },
            {
                id: 22,
                day: "Saturday",
                time: "1:00 PM",
                period: "Afternoon",
                title: "Family Swim Skills",
                type: "Parent Class",
                level: "Family",
                location: "Main Pool",
                typeClass: "type-parent"
            }
        ]
    },

    computed: {
        filteredSessions(){
            return this.sessions.filter(session => {
                const matchesDay = this.selectedDay === "All" || session.day === this.selectedDay;
                const matchesTime = this.selectedTime === "All" || session.period === this.selectedTime;

                return matchesDay && matchesTime;
            });
        },

        selectedSessions(){
            return this.sessions.filter(session => this.selectedSessionIds.includes(session.id));
        }
    },

    methods: {
        setDay(day){
            this.selectedDay = day;
        },

        clearFilters(){
            this.selectedDay = "All";
            this.selectedTime = "All";
        },

        toggleSession(sessionId){
            if(this.selectedSessionIds.includes(sessionId)){
                this.selectedSessionIds = this.selectedSessionIds.filter(id => id !== sessionId);
            }else{
                this.selectedSessionIds.push(sessionId);
            }

            this.formError = "";
        },

        sendEmail(){
            if(!this.selectedSessions.length){
                this.formError = "Please select at least one class before sending your request.";
                return;
            }

            if(!this.studentName || !this.parentName || !this.email || !this.phone){
                this.formError = "Please fill in the student name, parent name, email, and phone number.";
                return;
            }

            const classList = this.selectedSessions.map(session => {
                return session.title + " - " + session.day + " at " + session.time + " - " + session.location;
            }).join("\n");

            const subject = "Class Enrolment Request";

            const body =
                "Student name: " + this.studentName + "\n" +
                "Parent/Guardian name: " + this.parentName + "\n" +
                "Email: " + this.email + "\n" +
                "Phone: " + this.phone + "\n\n" +
                "Selected classes:\n" + classList + "\n\n" +
                "Message:\n" + this.message;

            const emailAddress = "enrolments@splashesaquatics.com";

            window.location.href =
                "mailto:" + emailAddress +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);
        }
    }
});