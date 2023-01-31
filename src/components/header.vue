<template>
  <div class="header-container">
    <header data-thq="thq-navbar" class="header-navbar-interactive">
      <router-link to="/" class="header-navlink">
        <img :alt="Logo_alt" :src="Logo_src" class="header-logo" />
      </router-link>
      <div data-thq="thq-navbar-nav" data-role="Nav" class="header-desktop-menu">
        <nav data-thq="thq-navbar-nav-links" data-role="Nav" class="header-nav">
          <router-link to="/products" class="header-navlink1 headermenulink">
            {{ text }}
          </router-link>
          <a
            :href="link_text"
            target="_blank"
            rel="noreferrer noopener"
            class="header-link headermenulink"
          >
            {{ text1 }}
          </a>
          <a href="#help" class="header-link1 headermenulink">{{ text2 }}</a>
          <a
            :href="link_text2"
            target="_blank"
            rel="noreferrer noopener"
            class="header-link2 headermenulink"
          >
            {{ text3 }}
          </a>
        </nav>
      </div>
      <div data-thq="thq-burger-menu" class="header-burger-menu">
        <svg viewBox="0 0 1024 1024" class="header-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-thq="thq-mobile-menu" class="header-mobile-menu">
        <div data-thq="thq-mobile-menu-nav" data-role="Nav" class="header-nav1">
          <div class="header-container1">
            <img :alt="image_alt" :src="image_src" class="header-image" />
            <div data-thq="thq-close-menu" class="header-menu-close">
              <svg viewBox="0 0 1024 1024" class="header-icon2">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav
            data-thq="thq-mobile-menu-nav-links"
            data-role="Nav"
            class="header-nav2"
          >
            <router-link
              to="/products"
              class="header-link3 headermenulink mobilemenuheader"
            >
              {{ text8 }}
            </router-link>
            <a
              :href="link_text3"
              target="_blank"
              rel="noreferrer noopener"
              class="header-link4 headermenulink mobilemenuheader"
            >
              {{ text11 }}
            </a>
            <a href="#help" class="header-link5 headermenulink mobilemenuheader">
              {{ text22 }}
            </a>
            <a
              :href="link_text21"
              target="_blank"
              rel="noreferrer noopener"
              class="header-link6 headermenulink mobilemenuheader"
            >
              {{ text31 }}
            </a>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    Logo_src: {
      type: String,
      default: '/playground_assets/logo1.svg',
    },
    link_text21: {
      type: String,
      default: 'https://blog.glowingkitty.com',
    },
    link_text2: {
      type: String,
      default: 'https://blog.glowingkitty.com',
    },
    text3: {
      type: String,
      default: 'Blog',
    },
    Logo_alt: {
      type: String,
      default: 'logo',
    },
    text8: {
      type: String,
      default: 'Products',
    },
    image_src: {
      type: String,
      default: '/playground_assets/logo1.svg',
    },
    text1: {
      type: String,
      default: 'Workshops',
    },
    text: {
      type: String,
      default: 'Products',
    },
    link_text1: {
      type: String,
      default: 'https://discord.glowingkitty.com',
    },
    link_text: {
      type: String,
      default: 'https://workshops.glowingkitty.com',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    link_text3: {
      type: String,
      default: 'https://workshops.glowingkitty.com',
    },
    text2: {
      type: String,
      default: 'Get help',
    },
    text11: {
      type: String,
      default: 'Workshops',
    },
    text31: {
      type: String,
      default: 'Blog',
    },
    text22: {
      type: String,
      default: 'Get help',
    },
  },
}
</script>

<style scoped>
.header-container {
  top: 0px;
  left: 0px;
  right: 0px;
  height: 85px;
  z-index: 100;
  position: fixed;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.57);
  background-color: var(--dl-color-gray-brightgray);
}
.header-navbar-interactive {
  left: 0px;
  color: #ffffff;
  right: 0px;
  width: 100%;
  margin: auto;
  display: flex;
  padding: 20px;
  position: absolute;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
}
.header-navlink {
  display: contents;
}
.header-logo {
  width: 138px;
  height: 46px;
  text-decoration: none;
}
.header-desktop-menu {
  display: flex;
}
.header-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.header-navlink1 {
  text-decoration: none;
}
.header-link {
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.header-link1 {
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.header-link2 {
  text-decoration: none;
}
.header-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.header-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.header-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.header-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.header-image {
  height: 2rem;
}
.header-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon2 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.header-nav2 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-link3 {
  text-decoration: none;
}
.header-link4 {
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.header-link5 {
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.header-link6 {
  text-decoration: none;
}
@media(max-width: 767px) {
  .header-container {
    height: 65px;
  }
  .header-navbar-interactive {
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
  }
  .header-logo {
    width: 135px;
    height: 35px;
  }
  .header-desktop-menu {
    display: none;
  }
  .header-link {
    margin-left: var(--dl-space-space-unit);
  }
  .header-link1 {
    margin-left: var(--dl-space-space-unit);
  }
  .header-burger-menu {
    display: flex;
  }
  .header-icon {
    fill: #D9D9D9;
    width: 40px;
    height: 40px;
  }
  .header-mobile-menu {
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    background-color: var(--dl-color-gray-brightgray);
  }
  .header-image {
    width: 135px;
    height: 35px;
  }
  .header-icon2 {
    fill: #ffffff;
    width: 40px;
    height: 40px;
  }
  .header-link4 {
    margin-left: var(--dl-space-space-unit);
  }
  .header-link5 {
    margin-left: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .header-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .header-mobile-menu {
    padding: 16px;
  }
}
</style>
