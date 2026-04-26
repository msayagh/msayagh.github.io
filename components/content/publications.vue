<template lang="pug">
  section.publications-section
    h2 {{ publication.titre }}
    separateur
    .year-groups
      .year-group(v-for="yearEntry in groupedByYear" :key="yearEntry.year")
        button.year-header(@click="toggleYear(yearEntry.year)")
          span.year-label {{ yearEntry.year }}
          .year-meta
            span.pub-count {{ yearEntry.pubs.length }} publication{{ yearEntry.pubs.length > 1 ? 's' : '' }}
            span.chevron(:class="{ 'is-open': openYears[yearEntry.year] }") ›
        .cards-list(v-show="openYears[yearEntry.year]")
          .pub-card(v-for="(pub, index) in yearEntry.pubs" :key="index")
            .card-meta
              span.type-badge(:class="getTypeClass(pub)") {{ getType(pub) }}
            .card-body
              .pub-text
                span(v-for="(part, i) in pub" :key="i")
                  a.pub-link(v-if="part.link" :href="part.link" target="_blank") {{ part.text }}
                  span.pub-plain(v-else) {{ part.text }}
</template>

<style lang="less" scoped>
@layer components {
  .publications-section {
    padding: 1rem 0;

    .year-groups {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .year-group {
      border: 1px solid #BDBDC3;
      border-radius: 8px;
      overflow: hidden;
    }

    .year-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.85rem 1.25rem;
      cursor: pointer;
      background-color: #E9E9ED;
      border: none;
      text-align: left;
      transition: background-color 0.2s;

      &:hover {
        background-color: #BDBDC3;
      }

      .year-label {
        font-size: 1.2rem;
        font-weight: 700;
        color: #233559;
        letter-spacing: 0.08em;
      }

      .year-meta {
        display: flex;
        align-items: center;
        gap: 1rem;

        .pub-count {
          font-size: 0.78rem;
          color: #919199;
          letter-spacing: 0.06em;
        }

        .chevron {
          font-size: 1.3rem;
          color: #233559;
          display: inline-block;
          transition: transform 0.3s ease;
          line-height: 1;

          &.is-open {
            transform: rotate(90deg);
          }
        }
      }
    }

    .cards-list {
      padding: 0.75rem;
      background-color: #f7f7f9;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .pub-card {
      background-color: #FFFFFF;
      border-radius: 6px;
      padding: 0.9rem 1.1rem;
      border: 1px solid #E9E9ED;
      transition: border-color 0.2s, box-shadow 0.2s;

      &:hover {
        border-color: #002EA5;
        box-shadow: 0 2px 8px rgba(0, 46, 165, 0.1);
      }

      .card-meta {
        margin-bottom: 0.4rem;
      }

      .type-badge {
        display: inline-block;
        font-size: 0.68rem;
        font-weight: 600;
        padding: 0.15rem 0.55rem;
        border-radius: 9999px;
        letter-spacing: 0.07em;
        text-transform: uppercase;

        &.badge-journal {
          background-color: rgba(0, 46, 165, 0.1);
          color: #002EA5;
        }

        &.badge-conference {
          background-color: rgba(35, 53, 89, 0.1);
          color: #233559;
        }

        &.badge-demo {
          background-color: rgba(56, 56, 56, 0.1);
          color: #383838;
        }

        &.badge-challenge {
          background-color: rgba(0, 100, 60, 0.1);
          color: #006440;
        }
      }

      .card-body {
        .pub-text {
          text-align: justify;
          font-size: 0.93rem !important;
          line-height: 1.72 !important;
          letter-spacing: 0.03em !important;
          color: #4F4F5A;

          .pub-link {
            color: #002EA5;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }

          .pub-plain {
            color: #4F4F5A;
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
  data() {
    return {
      openYears: {}
    };
  },
  computed: {
    publication() {
      return this.$store.getters.GET_PUBLICATIONS;
    },
    groupedByYear() {
      const groups = {};
      this.publication.content.forEach(pub => {
        const year = this.extractYear(pub);
        if (!groups[year]) groups[year] = [];
        groups[year].push(pub);
      });
      return Object.keys(groups)
        .sort((a, b) => b - a)
        .map(year => ({ year, pubs: groups[year] }));
    }
  },
  created() {
    const years = new Set(
      this.$store.getters.GET_PUBLICATIONS.content.map(pub => this.extractYear(pub))
    );
    years.forEach(year => {
      this.$set(this.openYears, year, true);
    });
  },
  methods: {
    extractYear(pub) {
      if (!pub || !pub[0]) return 'Other';
      const match = pub[0].text.match(/\((\d{4})\)/);
      return match ? match[1] : 'Other';
    },
    getType(pub) {
      if (!pub || !pub.length) return 'Conference';
      const lastText = pub[pub.length - 1].text.toLowerCase();
      if (
        lastText.includes(' journal') ||
        lastText.includes('transactions') ||
        lastText.includes('surveys') ||
        lastText.includes('(emse)') ||
        lastText.includes('(tosem)') ||
        lastText.includes('(tse)') ||
        lastText.includes('(jss)') ||
        lastText.includes('(csur)') ||
        lastText.includes('integration journal')
      ) return 'Journal';
      return 'Conference';
    },
    getTypeClass(pub) {
      const type = this.getType(pub);
      return {
        'badge-journal': type === 'Journal',
        'badge-conference': type === 'Conference',
        'badge-demo': type === 'Demo',
        'badge-challenge': type === 'Challenge'
      };
    },
    toggleYear(year) {
      this.$set(this.openYears, year, !this.openYears[year]);
    }
  }
};
</script>