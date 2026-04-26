<template lang="pug">
  section.positions-section
    h2 {{ positions.titre }}
    separateur
    p.intro {{ positions.intro }}
    .positions-list
      .position-card(v-for="pos in positions.list" :key="pos.type")
        .position-header
          span.position-badge(:class="'badge-' + pos.type.toLowerCase()") {{ pos.type }}
          h3 {{ pos.title }}
        p.position-desc {{ pos.description }}
        .requirements
          h4 Requirements
          ul
            li(v-for="req in pos.requirements" :key="req") {{ req }}
        .how-to-apply
          p.apply-text
            | To apply, please send your CV and a brief research statement to&nbsp;
            a(:href="'mailto:' + email") {{ email }}
            | .
</template>

<style lang="less" scoped>
@layer components {
  .positions-section {
    padding: 1rem 0;

    .intro {
      margin-top: 1.5rem;
      margin-bottom: 2rem;
      color: #4F4F5A;
      line-height: 1.85 !important;
      font-size: 0.97rem !important;
      letter-spacing: 0.04em !important;
    }

    .positions-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .position-card {
      background-color: #FFFFFF;
      border: 1px solid #E9E9ED;
      border-radius: 8px;
      padding: 1.5rem;
      border-left: 4px solid #002EA5;

      .position-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
        flex-wrap: wrap;

        .position-badge {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 0.2rem 0.7rem;
          border-radius: 9999px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          white-space: nowrap;

          &.badge-phd {
            background-color: rgba(0, 46, 165, 0.1);
            color: #002EA5;
          }

          &.badge-master {
            background-color: rgba(35, 53, 89, 0.1);
            color: #233559;
          }
        }

        h3 {
          color: #233559;
          font-size: 1.05rem !important;
          line-height: 1.4 !important;
          margin: 0;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: none;
        }
      }

      .position-desc {
        color: #4F4F5A;
        margin-bottom: 1.25rem;
        line-height: 1.75 !important;
        font-size: 0.93rem !important;
        letter-spacing: 0.03em !important;
      }

      .requirements {
        margin-bottom: 1.25rem;

        h4 {
          color: #393945;
          font-weight: 700;
          font-size: 0.78rem !important;
          letter-spacing: 0.12em;
          margin-bottom: 0.6rem;
          line-height: 1.4 !important;
          text-transform: uppercase;
        }

        ul {
          list-style: disc;
          padding-left: 1.3rem;

          li {
            color: #4F4F5A;
            font-size: 0.9rem !important;
            line-height: 1.65 !important;
            letter-spacing: 0.03em !important;
            text-transform: none;
            font-weight: normal;
            padding: 0.15rem 0;
            capitalize: none;
          }
        }
      }

      .how-to-apply {
        margin-top: 1rem;
        padding-top: 0.9rem;
        border-top: 1px solid #E9E9ED;

        .apply-text {
          color: #4F4F5A;
          font-size: 0.9rem !important;
          line-height: 1.65 !important;
          letter-spacing: 0.03em !important;

          a {
            color: #002EA5;
          }
        }
      }
    }
  }
}
</style>

<script>
import separateur from "@/components/uiElement/separateur.vue";

export default {
  components: { separateur },
  computed: {
    positions() {
      return this.$store.getters.GET_OPEN_POSITIONS;
    },
    email() {
      return this.$store.state.main.email;
    }
  }
};
</script>
