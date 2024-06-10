<template>
    <v-timeline align="start" side="end">
        <v-timeline-item
            dot-color="pink"
            size="small"
        >
            <div class="d-flex">
                <strong class="me-4">5pm</strong>
                <div>
                    <strong>New Icon</strong>
                    <div class="text-caption">
                        Mobile App
                    </div>
                </div>
            </div>
        </v-timeline-item>

        <v-timeline-item
            dot-color="teal-lighten-3"
            size="small"
        >
            <div class="d-flex">
                <strong class="me-4">3-4pm</strong>
                <div>
                    <strong>Design Stand Up</strong>
                    <div class="text-caption mb-2">
                        Hangouts
                    </div>
                </div>
            </div>
        </v-timeline-item>

        <v-timeline-item
            dot-color="pink"
            size="small"
        >
            <div class="d-flex">
                <strong class="me-4">12pm</strong>
                <div>
                    <strong>Lunch break</strong>
                </div>
            </div>
        </v-timeline-item>

        <v-timeline-item
            dot-color="teal-lighten-3"
            size="small"
        >
            <div class="d-flex">
                <strong class="me-4">9-11am</strong>
                <div>
                    <strong>Finish Home Screen</strong>
                    <div class="text-caption">
                        Web App
                    </div>
                </div>
            </div>
        </v-timeline-item>
    </v-timeline>

    <v-divider/>

    <!-- template 으로 한번 감싸줘야하네? ㅇㅂㅇ? -->
    <v-timeline align="start" side="end">
        <template v-for="item in list">
            <v-timeline-item
                :dot-color="item.dotColor"
                size="small"
            >
                <div class="d-flex">
                    <strong class="me-4">{{ item.time }}</strong>
                    <div>
                        <strong>{{ item.title }}</strong>
                        <div v-if="item.caption !== undefined" class="text-caption">
                            {{ item.caption }}
                        </div>
                    </div>
                </div>
            </v-timeline-item>
        </template>
    </v-timeline>
</template>
<script setup>
const list = [
    {
        dotColor: 'pink',
        time: '5pm',
        title: 'New Icon',
        caption: 'Mobile App'
    },
    {
        dotColor: 'teal-lighten-3',
        time: '3-4pm',
        title: 'Design Stand Up',
        caption: 'Hangouts'
    },
    {
        dotColor: 'pink',
        time: '12pm',
        title: 'Lunch break'
    },
    {
        dotColor: 'teal-lighten-3',
        time: '9-11am',
        title: 'Finish Home Screen',
        caption: 'Web App',
    }
]

</script>