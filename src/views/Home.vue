<template>
  <div class="home">
    <img class="img-fluid my-3" alt="Little Gems Logo" src="../assets/logo.png" />
    <div class="container py-5 mb-3">
      <div class="row">
        <p class="col-12 col-md-4">Montessori Accredited</p>
        <p class="col-12 col-md-4">Regional inspectors for MEA</p>
        <p class="col-12 col-md-4">Training teachers</p>
      </div>
    </div>

    <section id="quote" class="container bg-light mb-3">
      <blockquote class="blockquote p-5 text-left">
        <p>"The most important period of life is not the age of university studies, but the first one, the period from birth to the age of six ... At no other age has the child greater need for an intelligent help, and any obstacle that impedes his creative work will lessen the chance he has of achieving perfection"</p>
        <footer class="blockquote-footer">Maria Montessori</footer>
      </blockquote>
    </section>

    <section id="enroll" class="container mb-3">
      <h2>Enrolling your child in a Montessori toddler program has many benefits</h2>
      <div class="row">
        <div class="col-12 col-md-4 p-4">
          <span class="fa-stack fa-4x mb-2">
            <i class="fa fa-circle fa-stack-2x text-info"></i>
            <i class="fas fa-child fa-stack-1x text-white"></i>
          </span>
          <h3>Independence</h3>
          <p>Montessori toddlers learn to do things themselves. They are able to play independently, happily!</p>
        </div>
        <div class="col-12 col-md-4 p-4">
          <span class="fa-stack fa-4x mb-2">
            <i class="fa fa-circle fa-stack-2x text-info"></i>
            <i class="fas fa-people-carry fa-stack-1x text-white"></i>
          </span>
          <h3>Groupwork</h3>
          <p>Group activities are introduced to teach them to both care and cooperate with one another.</p>
        </div>
        <div class="col-12 col-md-4 p-4">
          <span class="fa-stack fa-4x mb-2">
            <i class="fa fa-circle fa-stack-2x text-info"></i>
            <i class="fas fa-comments fa-stack-1x text-white"></i>
          </span>
          <h3>Language</h3>
          <p>Many parents report their children’s vocabulary increase dramatically, making interactions easier.</p>
        </div>
      </div>
      <button class="btn btn-info" type="button">Read more</button>
    </section>

    <section id="blog" class="container mb-3 bg-light">
      <h3 class="py-5">Check out our blog</h3>
      <div class="carousel slide">
        <ol class="carousel-indicators">
          <li @click="currentSlide = 0" data-slide-to="0" :class="{active: currentSlide === 0}"></li>
          <li @click="currentSlide = 1" data-slide-to="1" :class="{active: currentSlide === 1}"></li>
          <li @click="currentSlide = 2" data-slide-to="2" :class="{active: currentSlide === 2}"></li>
        </ol>
        <div class="carousel-inner mx-auto pb-5" style="width: 70%;">
          <div class="carousel-item" :class="{active: currentSlide === 0}">
            <div class="row">
              <div class="col-12 col-md-4">
                <img
                  class="img-thumbnail d-block w-100"
                  src="@/assets/carousel-1.jpg"
                  alt="First slide"
                />
              </div>
              <div class="col-12 col-md-8">
                <h4 class="text-left">Settling in toolkit</h4>
                <p
                  class="text-left"
                >It is the time of the year that many families are visiting Little Gems with their tiny gems and getting prepared for the future nursery life. As a toddler classroom leader, we are faced with plenty of questions and thoughts about the settling. . .</p>
                <div class="d-flex">
                  <button type="button" class="btn btn-primary mr-2">Read full</button>
                  <button type="button" class="btn btn-secondary">View all</button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" :class="{active: currentSlide === 1}">
            <div class="row">
              <div class="col-12 col-md-4">
                <img
                  class="img-thumbnail d-block w-100"
                  src="@/assets/carousel-2.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="col-12 col-md-8">
                <h4 class="text-left">Easter activities</h4>
                <p
                  class="text-left"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quae perferendis cupiditate animi provident deleniti, quos quisquam dolor? Illum quo vitae facilis error delectus necessitatibus sunt molestiae officiis nobis unde!</p>
                <div class="d-flex">
                  <button type="button" class="btn btn-primary mr-2">Read full</button>
                  <button type="button" class="btn btn-secondary">View all</button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" :class="{active: currentSlide === 2}">
            <div class="row">
              <div class="col-12 col-md-4">
                <img
                  class="img-thumbnail d-block w-100"
                  src="@/assets/carousel-3.jpg"
                  alt="Third slide"
                />
              </div>
              <div class="col-12 col-md-8">
                <h4 class="text-left">Christmas Holidays</h4>
                <p
                  class="text-left"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quae perferendis cupiditate animi provident deleniti, quos quisquam dolor? Illum quo vitae facilis error delectus necessitatibus sunt molestiae officiis nobis unde!</p>
                <div class="d-flex">
                  <button type="button" class="btn btn-primary mr-2">Read full</button>
                  <button type="button" class="btn btn-secondary">View all</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          style="cursor: pointer;"
          role="button"
          @click="carouselControl('prev')"
        >
          <span class="carousel-control-prev-icon"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          style="cursor: pointer;"
          role="button"
          @click="carouselControl('next')"
        >
          <span class="carousel-control-next-icon"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>

    <section id="events" class="container mb-3">
      <h3>Upcoming Events</h3>
      <div class="carousel slide w-50 mx-auto">
        <h4>{{ `${formatMonth}, ${eventNav.year}` }}</h4>

        <a
          class="carousel-control-prev bg-primary"
          style="cursor: pointer;"
          role="button"
          @click="dateHandler('prev')"
        >
          <span class="carousel-control-prev-icon"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next bg-primary"
          style="cursor: pointer;"
          role="button"
          @click="dateHandler('next')"
        >
          <span class="carousel-control-next-icon"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { months } from "@/shared/months.js";
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      currentSlide: 0,
      eventNav: {
        year: Number(new Date(Date.now()).getFullYear()),
        month: Number(new Date(Date.now()).getMonth())
      }
    };
  },
  methods: {
    carouselControl(string) {
      if (string === "next") {
        this.currentSlide === 2 ? (this.currentSlide = 0) : this.currentSlide++;
      } else {
        this.currentSlide === 0 ? (this.currentSlide = 2) : this.currentSlide--;
      }
    },
    dateHandler(string) {
      if (string === "next") {
        this.eventNav.month === 11
          ? (this.eventNav.year++, (this.eventNav.month = 0))
          : this.eventNav.month++;
      } else {
        this.eventNav.month === 0
          ? (this.eventNav.year--, (this.eventNav.month = 11))
          : this.eventNav.month--;
      }
    }
  },
  computed: {
    formatMonth() {
      return months[this.eventNav.month];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
