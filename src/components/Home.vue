<template>
  <div id="wrapper">
    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12 left">
            <div class="row no-padding">
              <div class="col-md-3 col-sm-12 logoTop">
                <div class="logo">
                  <a href="/" title="">
                    <img src="https://theme.hstatic.net/1000003969/1000323463/14/logo.png?v=6530">
                  </a>
                </div>
              </div>
              <div class="col-md-9 col-sm-12 no-padding searchBox-wrapper">
                <div class="searchBox col-xs-12 no-padding">
                  <form action="/action_page.php">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search" name="search">
                      <div class="input-group-btn search-btn">
                        <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="row">
              <div class="col-md-5 col-sm-4 switchboardTop left">
                <div class="switchboard_wrapper">
                  <i class="fa fa-bell" aria-hidden="true"></i>
                  <span>Thông báo của tôi</span>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 switchboardTop">
                <div class="usertop_wrapper">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span>Đăng nhập</span>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 switchboardTop">
                <div class="carttop_wrapper">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span>0 sản phẩm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav>
      <div class="top">
          <div id="top-menu" class="top-menu hidden-sm hidden-xs">
            <div class="menutopBar">
              <div class="container no-padding" style="position: relative">
                <div class="menuTop-wrapper">
                  <b-nav fill tabs>
                    <b-nav-item>Category 1</b-nav-item>
                    <b-nav-item>Category 2</b-nav-item>
                    <b-nav-item>Category 3</b-nav-item>
                    <b-nav-item>Category 4</b-nav-item>
                    <b-nav-item>Category 5</b-nav-item>
                  </b-nav>
                </div>
              </div>
            </div>
          </div>
          <div id="slide-thumb" class="slide-thumb">
            <div class="container no-padding">
              <div class="col-12 no-padding">
                <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="4000"
                  img-width="1024"
                  img-height="400"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd">
                    <b-carousel-slide v-for="banner in banners" :key="banner">
                      <img slot="img" class="d-block w-100" width="1024" height="400"
                           :src="banner" alt="image slot">
                    </b-carousel-slide>
                  </b-carousel>
              </div>
            </div>
          </div>
          <div class="container">
            <div id="top-item" class="container">
              <div class="row">
                <div class="col-sm-12 col-xs-10 col-sm-offset-2 top-item-title-wrapper text-center">
                  <h3 class="top-item-title">Top 4 hottest items</h3>
                </div>
              </div>
              <div class="no-padding">
                  <div class="row owl-wrapper text-center">
                    <div class="col-md-3 col-sm-3 col-6 no-padding item-image" v-for="hotItem in hotItems" :key="hotItem">
                      <router-link :to="{ name: 'product', params: { id: hotItem.code }}">
                        <a href="/">
                          <span class="new-item-icon">Hot</span>
                          <div class="image-default-wrapper">
                            <img class="image-default" :src="hotItem.image1" alt="">
                            <img class="image-hover" :src="hotItem.image2" alt="">
                          </div>
                          <div class="item-code">
                            {{hotItem.code}}
                          </div>
                          <div class="item-price">
                            <span>{{hotItem.price}}</span>
                          </div>
                        </a>
                      </router-link>
                    </div>
                  </div>
              </div>
              <div class="row">
                <div class="col-md-12 more-item text-center">
                  <h4 class="more-item-link">
                    <a href="/">More items</a>
                  </h4>
                  <hr>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-xs-10 col-sm-offset-2 text-center top-new-item-title-wrapper">
                  <h3 class="top-item-title">Top new items</h3>
                </div>
              </div>
              <div class="no-padding">
                <div class="row owl-wrapper text-center">
                  <div class="item-information no-padding item-image" v-for="newItem in newItems" :key="newItem">
                    <router-link :to="{ name: 'product', params: { id: newItem.code }}">
                      <a href="/">
                        <span class="new-item-icon">New</span>
                        <div class="image-default-wrapper">
                          <img class="image-default" :src="newItem.image1" alt="">
                          <img class="image-hover" :src="newItem.image2" alt="">
                        </div>
                        <div class="item-code">
                          {{newItem.code}}
                        </div>
                        <div class="item-price">
                          <span>{{newItem.price}}</span>
                        </div>
                      </a>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      banners: [require('../assets/images/1080-banner.png'), require('../assets/images/1080-banner1.jpg'), require('../assets/images/1080-banner2.png')],
      currentNumber: 0,
      timer: null,
      slide: '',
      index: '',
      id: null,
      newItem: [],
      hotItems: [
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'B3921',
          price: '200.000'
        },
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'B1932',
          price: '250.000'
        },
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'B8529',
          price: '300.000'
        },
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'B3295',
          price: '350.000'
        }
      ],
      newItems: [
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'D238',
          price: '400.000'
        },
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'H482',
          price: '430.000'
        },
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'L388',
          price: '530.000'
        },
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'H2394',
          price: '610.000'
        },
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'U3483',
          price: '750.000'
        },
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'K2372',
          price: '420.000'
        },
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'N2304',
          price: '520.000'
        },
        {
          image1: require('../assets/images/logo.jpg'),
          image2: require('../assets/images/pepsi.png'),
          code: 'J493',
          price: '610.000'
        }
      ]
    }
  },

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/styles/home.scss';
@import 'bootstrap-vue/dist/bootstrap-vue.css';

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  width: 100%;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
  width: 100%;
  position: absolute;
}

.left-arrow-banner, .right-arrow-banner {
  position: absolute;
  top: 40%;
}

.left-arrow-banner {
  float: left;
  margin-left: 10px;
}

.right-arrow-banner {
  float: right;
  right: 0;
  margin-right: 10px;
}

.fa-angle-left, .fa-angle-right {
  color: #ffffff;
  opacity: 0.2;
  font-size: 65px;
}
</style>
