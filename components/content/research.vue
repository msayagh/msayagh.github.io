<template lang="pug">
  section.research-section
    h2 {{ research.titre }}
    separateur
    .research-statement
      h3 Research Statement
      p {{ research.statement }}
      .statement-actions
        button.action-link(@click="navigateTo('Publications')")
          span.action-icon 📚
          span.action-label Publications
        button.action-link.action-secondary(@click="navigateTo('Open Positions')")
          span.action-icon 👥
          span.action-label Join Team
    .research-themes
      h3 Research Themes
      .themes-grid
        .theme-card(v-for="theme in research.themes" :key="theme.titre")
          .theme-icon {{ theme.icon }}
          h4 {{ theme.titre }}
          p {{ theme.description }}
</template>

<style lang="less" scoped>
@layer components {
  .research-section {
    padding: 1rem 0;

    .research-statement {
      margin-top: 2rem;
      margin-bottom: 2.5rem;

      h3 {
        color: #233559;
        margin-bottom: 1rem;
        font-size: 1.1rem !important;
        letter-spacing: 0.08em;
      }

      p {
        text-align: justify;
        color: #4F4F5A;
        line-height: 1.85 !important;
        font-size: 0.97rem !important;
        letter-spacing: 0.04em !important;
      }

      .statement-actions {
        margin-top: 1.35rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .action-link {
          border: none;
          background: #002EA5;
          color: #FFFFFF;
          padding: 1rem 1.25rem;
          border-radius: 14px;
          min-width: 220px;
          min-height: 95px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          row-gap: 0.3rem;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(0, 46, 165, 0.28);
          transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

          .action-icon {
            font-size: 2.2rem;
            line-height: 1;
          }

          .action-label {
            font-size: 0.82rem;
            letter-spacing: 0.12em;
            line-height: 1.2;
          }

          &:hover {
            background: #233559;
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 14px 28px rgba(35, 53, 89, 0.35);
          }

          &.action-secondary {
            background: #233559;
            box-shadow: 0 10px 24px rgba(35, 53, 89, 0.28);

            &:hover {
              background: #002EA5;
            }
          }
        }

        @media (max-width: 768px) {
          .action-link {
            min-width: 100%;
          }
        }
      }
    }

    .research-themes {
      h3 {
        color: #233559;
        margin-bottom: 1.5rem;
        font-size: 1.1rem !important;
        letter-spacing: 0.08em;
      }

      .themes-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
      }

      .theme-card {
        background-color: #FFFFFF;
        border: 1px solid #E9E9ED;
        border-radius: 8px;
        padding: 1.25rem;
        border-top: 3px solid #002EA5;
        transition: box-shadow 0.2s;

        &:hover {
          box-shadow: 0 3px 10px rgba(0, 46, 165, 0.1);
        }

        .theme-icon {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        h4 {
          color: #233559;
          font-weight: 600;
          font-size: 0.95rem !important;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          line-height: 1.4 !important;
          text-transform: none;
        }

        p {
          color: #65656F;
          font-size: 0.87rem !important;
          line-height: 1.65 !important;
          letter-spacing: 0.03em !important;
          text-align: left;
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
    research() {
      return this.$store.getters.GET_RESEARCH;
    }
  },
  methods: {
    navigateTo(sectionTitle) {
      const stateMenu = this.$store.getters.GET_MAINTENANCE;
      stateMenu.menu.forEach(element => {
        element.state = element.titre === sectionTitle;
      });
      this.$store.dispatch("SET_MAINTENANCE", stateMenu);
    }
  }
};
</script>
