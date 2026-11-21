<script setup>
import LessonHeading from './LessonHeading.vue'
import QuickCheck from '../QuickCheck.vue'
import LessonVisual from '../visuals/LessonVisual.vue'
import MemoryHook from '../MemoryHook.vue'

import FamilyLadderVisual from '../visuals/generic/FamilyLadderVisual.vue'
import MoleculeVisual from '../visuals/generic/MoleculeVisual.vue'
import PreparationFlowVisual from '../visuals/generic/PreparationFlowVisual.vue'
import BondChangeVisual from '../visuals/generic/BondChangeVisual.vue'
import ComparisonVisual from '../visuals/generic/ComparisonVisual.vue'
import TestBenchVisual from '../visuals/generic/TestBenchVisual.vue'
import UsesExplorer from '../visuals/generic/UsesExplorer.vue'
import PropertyTrendVisual from '../visuals/generic/PropertyTrendVisual.vue'
import ReactionMapVisual from '../visuals/generic/ReactionMapVisual.vue'

import MomentBench from '../visuals/physics/MomentBench.vue'
import MomentArmVisual from '../visuals/physics/MomentArmVisual.vue'
import CoupleVisual from '../visuals/physics/CoupleVisual.vue'
import EquilibriumSim from '../visuals/physics/EquilibriumSim.vue'
import MetreRuleLab from '../visuals/physics/MetreRuleLab.vue'
import SeesawVisual from '../visuals/physics/SeesawVisual.vue'
import SpringRuleVisual from '../visuals/physics/SpringRuleVisual.vue'
import CentreOfGravityLab from '../visuals/physics/CentreOfGravityLab.vue'
import PlumbLineVisual from '../visuals/physics/PlumbLineVisual.vue'
import CircularVelocityVisual from '../visuals/physics/CircularVelocityVisual.vue'
import CentripetalLab from '../visuals/physics/CentripetalLab.vue'
import RotatingFramesVisual from '../visuals/physics/RotatingFramesVisual.vue'

import IsomerLab from '../labs/IsomerLab.vue'
import PreparationLab from '../labs/PreparationLab.vue'
import TestBenchLab from '../labs/TestBenchLab.vue'
import SorterLab from '../labs/SorterLab.vue'
import EsterBuilderLab from '../labs/EsterBuilderLab.vue'

const props = defineProps({
  lesson: { type: Object, required: true }
})

const visualMap = {
  FamilyLadderVisual,
  MoleculeVisual,
  PreparationFlowVisual,
  BondChangeVisual,
  ComparisonVisual,
  TestBenchVisual,
  UsesExplorer,
  PropertyTrendVisual,
  ReactionMapVisual,
  MomentBench,
  MomentArmVisual,
  CoupleVisual,
  EquilibriumSim,
  MetreRuleLab,
  SeesawVisual,
  SpringRuleVisual,
  CentreOfGravityLab,
  PlumbLineVisual,
  CircularVelocityVisual,
  CentripetalLab,
  RotatingFramesVisual
}

const labMap = {
  IsomerLab,
  PreparationLab,
  TestBenchLab,
  SorterLab,
  EsterBuilderLab
}
</script>

<template>
  <section :id="lesson.id" class="lesson" :aria-labelledby="`${lesson.id}-title`">
    <LessonHeading
      :id="lesson.id"
      :number="lesson.number"
      :title="lesson.title"
      :objective="lesson.objective"
    />

    <div class="prose">
      <template v-for="(block, index) in lesson.blocks" :key="`${lesson.id}-${index}`">
        <h3 v-if="block.type === 'h3'">{{ block.text }}</h3>
        <p v-else-if="block.type === 'p'">{{ block.text }}</p>
        <p v-else-if="block.type === 'formula'" class="formula">{{ block.text }}</p>
        <div v-else-if="block.type === 'definition'" class="definition">
          <span class="definition__label">{{ block.label || 'Definition' }}</span>
          <p>{{ block.text }}</p>
        </div>
        <div v-else-if="block.type === 'misconception'" class="misconception">
          <span class="tag">Common misconception</span>
          <p>{{ block.text }}</p>
        </div>
        <div v-else-if="block.type === 'examtip'" class="exam-tip">
          <span class="tag">Exam tip</span>
          <p>{{ block.text }}</p>
        </div>
        <ul v-else-if="block.type === 'list'">
          <li v-for="item in block.items" :key="item">{{ item }}</li>
        </ul>
        <ol v-else-if="block.type === 'steps'">
          <li v-for="item in block.items" :key="item">{{ item }}</li>
        </ol>
        <div v-else-if="block.type === 'table'" class="table-wrap">
          <table class="compare-table">
            <caption v-if="block.caption">{{ block.caption }}</caption>
            <thead>
              <tr>
                <th v-for="header in block.headers" :key="header" scope="col">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in block.rows" :key="row[0]">
                <th scope="row">{{ row[0] }}</th>
                <td v-for="cell in row.slice(1)" :key="cell">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <LessonVisual
          v-else-if="block.type === 'visual'"
          :id="block.id || undefined"
          :title="block.title"
          :caption="block.caption"
          :description="block.description"
          :notice="block.notice"
        >
          <component :is="visualMap[block.component]" v-bind="block.props" />
        </LessonVisual>
        <component
          :is="labMap[block.component]"
          v-else-if="block.type === 'lab'"
          v-bind="block.props"
        />
        <MemoryHook v-else-if="block.type === 'memory'" v-bind="block" />
        <template v-else-if="block.type === 'quickchecks'">
          <QuickCheck v-for="question in block.items" :key="question.id" v-bind="question" />
        </template>
      </template>
    </div>
  </section>
</template>
