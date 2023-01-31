<template>
  <div class="meetup-list-container" v-bind:class="rootClassName">
    <div class="meetup-list-container01">
      <span class="meetup-list-text">{{ headline }}</span>
      <span class="meetup-list-text1">{{ text }}</span>
      <span class="meetup-list-text2">{{ text1 }}</span>
    </div>
    <div class="meetup-list-container02">
      <div class="meetup-list-container03">
        <events-l-e-d-co-hacking-evening
          rootClassName="events-l-e-d-co-hacking-evening-root-class-name"
        ></events-l-e-d-co-hacking-evening>
      </div>
      <div class="meetup-list-container04">
        <eventsworkshops-learn-p-c-b-design-with-ki-cad
          rootClassName="eventsworkshops-learn-p-c-b-design-with-ki-cad-root-class-name"
        ></eventsworkshops-learn-p-c-b-design-with-ki-cad>
      </div>
      <div class="meetup-list-container05">
        <eventsworkshops-how-to-plan-build-your-own-l-e-d-project
          rootClassName="eventsworkshops-how-to-plan-build-your-own-l-e-d-project-root-class-name"
        ></eventsworkshops-how-to-plan-build-your-own-l-e-d-project>
      </div>
      <div class="meetup-list-container06">
        <eventsworkshops3d-model-your-l-e-d-project-in-fusion360
          rootClassName="eventsworkshops3d-model-your-l-e-d-project-in-fusion360-root-class-name3"
        ></eventsworkshops3d-model-your-l-e-d-project-in-fusion360>
      </div>
      <div class="meetup-list-container07">
        <eventsworkshops-design-it-all-into-to-figma
          rootClassName="eventsworkshops-design-it-all-into-to-figma-root-class-name"
        ></eventsworkshops-design-it-all-into-to-figma>
      </div>
      <div class="meetup-list-container08"></div>
      <div class="meetup-list-container09"></div>
    </div>
    <a
      href="https://events.glowingkitty.com"
      target="_blank"
      rel="noreferrer noopener"
      class="meetup-list-link button"
    >
      {{ button }}
    </a>
  </div>
</template>

<script>
import EventsLEDCoHackingEvening from './events-l-e-d-co-hacking-evening'
import EventsworkshopsLearnPCBDesignWithKiCad from './eventsworkshops-learn-p-c-b-design-with-ki-cad'
import EventsworkshopsHowToPlanBuildYourOwnLEDProject from './eventsworkshops-how-to-plan-build-your-own-l-e-d-project'
import Eventsworkshops3dModelYourLEDProjectInFusion360 from './eventsworkshops3d-model-your-l-e-d-project-in-fusion360'
import EventsworkshopsDesignItAllIntoToFigma from './eventsworkshops-design-it-all-into-to-figma'

export default {
  name: 'MeetupList',
  props: {
    text1: {
      type: String,
      default: 'From total beginner to advanced.',
    },
    text: {
      type: String,
      default: 'Workshops, talks and more.',
    },
    button: {
      type: String,
      default: 'Show upcoming events',
    },
    headline: {
      type: String,
      default: 'Join our events',
    },
    rootClassName: String,
  },
  components: {
    EventsLEDCoHackingEvening,
    EventsworkshopsLearnPCBDesignWithKiCad,
    EventsworkshopsHowToPlanBuildYourOwnLEDProject,
    Eventsworkshops3dModelYourLEDProjectInFusion360,
    EventsworkshopsDesignItAllIntoToFigma,
  },
}
</script>

<style scoped>
.meetup-list-container {
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  padding-top: 69px;
  padding-left: 46px;
  padding-right: 46px;
  flex-direction: column;
  padding-bottom: 69px;
  background-color: var(--dl-color-gray-brightgray);
}
.meetup-list-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  z-index: 5;
  max-width: 330px;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
}
.meetup-list-text {
  color: #ffffff;
  font-size: 30px;
  font-family: Lexend Deca;
  margin-bottom: 20px;
}
.meetup-list-text1 {
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  font-family: Lexend Deca;
}
.meetup-list-text2 {
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  font-family: Lexend Deca;
}
.meetup-list-container02 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: flex-end;
  margin-bottom: 60px;
  justify-content: center;
}
.meetup-list-container03 {
  flex: 0 0 auto;
  display: flex;
  z-index: 1;
  align-items: flex-start;
  margin-bottom: 60px;
  flex-direction: column;
}
.meetup-list-container04 {
  flex: 0 0 auto;
  display: flex;
  z-index: 3;
  align-items: flex-start;
  margin-left: -200px;
  margin-bottom: 30px;
  flex-direction: column;
}
.meetup-list-container05 {
  flex: 0 0 auto;
  display: flex;
  z-index: 5;
  margin-top: 60px;
  align-items: flex-start;
  margin-left: -150px;
  margin-right: -150px;
  flex-direction: column;
}
.meetup-list-container06 {
  flex: 0 0 auto;
  display: flex;
  z-index: 3;
  align-items: flex-start;
  margin-right: -200px;
  margin-bottom: 30px;
  flex-direction: column;
}
.meetup-list-container07 {
  flex: 0 0 auto;
  display: flex;
  z-index: 1;
  align-items: flex-start;
  margin-bottom: 60px;
  flex-direction: column;
}
.meetup-list-container08 {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 4;
  position: absolute;
  background-color: rgba(32, 32, 32, 0.6);
}
.meetup-list-container09 {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 2;
  position: absolute;
  background-color: rgba(32, 32, 32, 0.6);
}
.meetup-list-link {
  z-index: 5;
  text-decoration: none;
}
.meetup-list-root-class-name {
  width: 100%;
  height: auto;
}
@media(max-width: 1200px) {
  .meetup-list-container05 {
    margin-left: -210px;
    margin-right: -210px;
  }
}
@media(max-width: 991px) {
  .meetup-list-container04 {
    margin-left: -130px;
  }
  .meetup-list-container05 {
    margin-left: -120px;
    margin-right: -120px;
  }
  .meetup-list-container06 {
    margin-right: -130px;
  }
}
@media(max-width: 767px) {
  .meetup-list-container {
    padding-top: 45px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 45px;
  }
  .meetup-list-container04 {
    margin-left: -150px;
  }
  .meetup-list-container05 {
    margin-left: -150px;
    margin-right: -150px;
  }
  .meetup-list-container06 {
    margin-right: -150px;
  }
}
</style>
