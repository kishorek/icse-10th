export const lessonContent = [
  {
    id: 'lesson-1',
    number: 1,
    title: 'Turning effect: moment of a force',
    objective:
      'Distinguish translational from rotational motion, define the moment of a force, calculate it from F × d, and explain why the perpendicular distance and the angle of the push matter.',
    blocks: [
      {
        type: 'p',
        text: 'Push a closed door near its hinge. It barely moves. Push the same door at the handle with the same force and it swings open easily. The force has not changed, but its turning effect has. This lesson explains what that turning effect depends on and how to calculate it.'
      },
      { type: 'h3', text: 'Two kinds of motion' },
      {
        type: 'p',
        text: 'In Class IX you learned that a force can change the speed or direction of a body. For a rigid body, the same force can produce one of two quite different motions, depending on where it acts and whether the body is free to move.'
      },
      {
        type: 'definition',
        label: 'Translational motion',
        text: 'When a force acts on a body that is free to move, the body moves along a straight path in the direction of the force. This is linear or translational motion.'
      },
      {
        type: 'definition',
        label: 'Rotational motion',
        text: 'When a body is pivoted at a point and a force is applied at a suitable point, the body turns about the axis through the pivot. This is rotational motion.'
      },
      {
        type: 'p',
        text: 'A door is pivoted at its hinges. A wheel is pivoted at its axle. A steering wheel is pivoted at the centre of the steering column. In each case the pivot is fixed, so the body cannot travel in the direction of the force. Instead, the force twists it about the pivot.'
      },
      { type: 'h3', text: 'What does the turning effect depend on?' },
      {
        type: 'p',
        text: 'Two quantities control the turning effect. The first is the size of the force. The second is how far the line of action of the force passes from the pivot, measured at right angles. That second distance is the one students most often get wrong, so watch it in the simulation below.'
      },
      {
        type: 'visual',
        component: 'MomentBench',
        id: 'p1-moment-visual',
        title: 'The door torque bench',
        caption:
          'Change the force, its distance from the hinge and the angle of the push. The door responds to the moment, not to the force alone.',
        description:
          'A top view of a door pivoted at the left. A force arrow acts at a chosen distance from the pivot. A dashed line shows the perpendicular distance from the pivot to the line of action. The door swings by an amount that grows with the moment.',
        notice: [
          'Doubling the force doubles the moment; doubling the perpendicular distance also doubles it.',
          'An angled push has a smaller perpendicular distance, so it produces a smaller moment.',
          'A force whose line of action passes through the pivot has zero moment.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Try this: set the force to 20 N with the handle 0.6 m from the hinge and note the moment. Halve the distance, then halve the force, then change the angle to 30°. Decide which change halves the moment, and explain each result using M = F × d.'
      },
      {
        type: 'definition',
        label: 'Definition',
        text: 'The moment of a force (or torque) about a pivot is the product of the force and the perpendicular distance of its line of action from the pivot.'
      },
      { type: 'formula', text: 'Moment = force × perpendicular distance    →    M = F × d' },
      {
        type: 'p',
        text: 'The distance d is measured along the perpendicular from the pivot to the line of action. If the force is applied at 90° to the body, d is simply the distance from the pivot to the point of application. If the force is applied at a slant, d is shorter than that distance.'
      },
      {
        type: 'visual',
        component: 'MomentArmVisual',
        id: 'p1-arm-visual',
        title: 'Why the angle changes the arm',
        caption:
          'Step through a perpendicular push and a slanted push. The slanted force has a shorter perpendicular distance, so the same force turns the body less.',
        description:
          'A door seen from above is pushed first at 90°. The line of action is extended and the perpendicular distance from the pivot is marked. The force is then tilted and the perpendicular distance becomes visibly shorter.',
        notice: [
          'The line of action is the straight line along which the force acts, extended if necessary.',
          'The perpendicular distance is measured at 90° to that line.',
          'A slanted push is not useless, but only part of it contributes to the turning effect.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Predict first: with the same force, will a 42° push give more or less than half the moment of a 90° push? Play the sequence, then check your prediction against the arm length shown.'
      },
      { type: 'h3', text: 'Units and direction' },
      {
        type: 'table',
        caption: 'Units of moment of force',
        headers: ['System', 'Unit', 'Relationship'],
        rows: [
          ['SI', 'newton metre (N m)', '1 N m = 1 N × 1 m'],
          ['CGS', 'dyne centimetre (dyne cm)', '1 N m = 10⁷ dyne cm'],
          ['Gravitational (SI)', 'kgf m', '1 kgf m = 9.8 N m'],
          ['Gravitational (CGS)', 'gf cm', '1 gf cm = 980 dyne cm']
        ]
      },
      {
        type: 'p',
        text: 'Moment is a vector quantity. Its direction is along the axis of rotation: outwards for an anticlockwise moment and inwards for a clockwise moment. For calculations, take anticlockwise as positive and clockwise as negative, the convention used in the supplied chapter.'
      },
      {
        type: 'table',
        caption: 'Clockwise or anticlockwise?',
        headers: ['Direction of turn', 'Sign used here', 'Example'],
        rows: [
          ['Anticlockwise', 'Positive (+)', 'Pushing the left side of a steering wheel upwards'],
          ['Clockwise', 'Negative (−)', 'Pushing the same side of the wheel downwards']
        ]
      },
      { type: 'h3', text: 'Worked example: a door' },
      {
        type: 'steps',
        items: [
          'Given: force F = 20 N, perpendicular distance d = 0.50 m, push at 90° to the door.',
          'Required: the moment of the force about the hinge.',
          'Formula: M = F × d.',
          'Substitute: M = 20 N × 0.50 m = 10 N m.',
          'State the direction: the door turns anticlockwise, so the moment is 10 N m anticlockwise.'
        ]
      },
      {
        type: 'p',
        text: 'Now suppose the same 20 N push is made at 30° to the door instead of 90°. The perpendicular distance becomes d = 0.50 × sin 30° = 0.25 m. The moment falls to 20 × 0.25 = 5 N m. The force is unchanged; its line of action has simply moved closer to the pivot.'
      },
      {
        type: 'examtip',
        text: 'Always mark the pivot first, then draw the line of action of the force, then drop a perpendicular from the pivot to that line. If you measure along the door instead of along the perpendicular, the answer will be too large.'
      },
      {
        type: 'misconception',
        text: 'A common mistake is to think a bigger force always gives a bigger moment. It does not if the bigger force acts through or very near the pivot. Moment depends on both the force and the perpendicular distance.'
      },
      { type: 'h3', text: 'Everyday examples' },
      {
        type: 'list',
        items: [
          'Door: the handle is far from the hinges so a small push gives a useful moment. A push at the hinge gives zero moment.',
          'Spanner: a long handle increases d, so a small force loosens a tight nut.',
          'Steering wheel: the rim is far from the centre, so the hands can turn the wheel easily.',
          'Bicycle pedal: the pedal is on a crank arm, so the rider’s push has a moment about the axle.',
          'Hand flour grinder and water tap: the handle is placed as far as possible from the pivot to increase the turning effect.'
        ]
      },
      {
        type: 'memory',
        technique: 'Cause-and-effect chain',
        title: 'Longer handle, smaller effort',
        aid: 'A longer handle increases d, so the same moment can be produced by a smaller force.',
        mapping: [
          {
            cue: 'Longer handle',
            target: 'Perpendicular distance d increases',
            meaning: 'The force line is farther from the pivot, so its moment rises.'
          },
          {
            cue: 'Smaller effort',
            target: 'A smaller force can do the same job',
            meaning: 'To keep M fixed, an increase in d allows a decrease in F.'
          },
          {
            cue: 'Right angle',
            target: 'The full distance counts',
            meaning: 'At 90°, the perpendicular distance equals the distance from the pivot.'
          }
        ],
        recall:
          'A door handle is 1.0 m from the hinge. Explain why a 10 N push at the handle beats a 40 N push only 0.2 m from the hinge.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'p1-q1',
            question: 'The turning effect of a force about a pivot depends on:',
            options: [
              { value: 'A', text: 'the force only' },
              { value: 'B', text: 'the perpendicular distance only' },
              { value: 'C', text: 'both the force and the perpendicular distance' },
              { value: 'D', text: 'neither the force nor the distance' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. Moment = force × perpendicular distance, so both quantities matter.',
            wrongFeedback:
              'Not quite. Moment is the product of the force and the perpendicular distance, so changing either one changes the moment.'
          },
          {
            id: 'p1-q2',
            question: 'The SI unit of the moment of a force is:',
            options: [
              { value: 'A', text: 'newton (N)' },
              { value: 'B', text: 'newton metre (N m)' },
              { value: 'C', text: 'joule (J)' },
              { value: 'D', text: 'newton per metre (N/m)' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. Moment = force × distance, so the unit is newton metre.',
            wrongFeedback:
              'The unit comes from multiplying force by distance. It is newton metre (N m), not the joule used for work.'
          },
          {
            id: 'p1-q3',
            question: 'A force is applied exactly at the pivot of a body. Its moment about the pivot is:',
            options: [
              { value: 'A', text: 'maximum' },
              { value: 'B', text: 'equal to the force' },
              { value: 'C', text: 'zero' },
              { value: 'D', text: 'equal to the weight of the body' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. The perpendicular distance is zero, so the moment is zero.',
            wrongFeedback:
              'If the line of action passes through the pivot, the perpendicular distance is zero, so there is no turning effect.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    number: 2,
    title: 'Couples and equilibrium',
    objective:
      'Define a couple and its moment, explain why a couple turns without translating, and state the two conditions a body must satisfy to be in equilibrium.',
    blocks: [
      {
        type: 'p',
        text: 'Turn a steering wheel with two hands. One hand pushes up on the left and the other pulls down on the right. The two forces are equal and opposite, yet the wheel turns. They do not cancel out, because they do not act along the same line.'
      },
      { type: 'h3', text: 'What is a couple?' },
      {
        type: 'definition',
        label: 'Couple',
        text: 'Two equal and opposite parallel forces whose lines of action do not coincide form a couple. A couple always produces rotation.'
      },
      {
        type: 'p',
        text: 'The perpendicular distance between the lines of action of the two forces is called the couple arm, d. Each force produces a moment in the same sense, so the two moments add rather than cancel.'
      },
      { type: 'formula', text: 'Moment of a couple = either force × couple arm    →    M = F × d' },
      {
        type: 'p',
        text: 'The resultant of the two forces is zero, so the couple cannot make the body move from one place to another. It can only turn the body. That is why the centre of a steering wheel stays fixed while the rim rotates.'
      },
      {
        type: 'visual',
        component: 'CoupleVisual',
        id: 'p2-couple-visual',
        title: 'A couple spins without drifting',
        caption:
          'Two equal, opposite, parallel forces turn the wheel while the centre stays where it is.',
        description:
          'A steering wheel is acted on by two equal tangential forces in opposite directions. The couple arm is marked, the wheel rotates, and a label shows that the resultant force is zero.',
        notice: [
          'The forces are equal and opposite, so the resultant force is zero.',
          'Their lines of action are separate, so their moments add.',
          'The moment of the couple is F × d, where d is the perpendicular gap between the force lines.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Try this: play the steering wheel, then switch to the bar. In each case, point to the two force lines and the couple arm before pressing Play again.'
      },
      {
        type: 'misconception',
        text: 'Two equal and opposite forces do not always cancel. If they act along the same line, they balance and produce no rotation. If they are parallel but separated, they form a couple and produce rotation.'
      },
      { type: 'h3', text: 'Equilibrium of a body' },
      {
        type: 'definition',
        label: 'Equilibrium',
        text: 'When a number of forces acting on a body produce no change in its state of rest or of linear or rotational motion, the body is said to be in equilibrium.'
      },
      {
        type: 'p',
        text: 'Equilibrium does not always mean “not moving”. It means “not changing how it moves”. A body at rest is in static equilibrium. A body moving with constant velocity is in dynamic equilibrium.'
      },
      {
        type: 'table',
        caption: 'Static and dynamic equilibrium',
        headers: ['Type', 'State of the body', 'Example'],
        rows: [
          ['Static', 'At rest, with no change in state', 'A book resting on a table; a beam balance with equal moments'],
          ['Dynamic', 'Moving uniformly, with no change in velocity', 'A raindrop falling at constant terminal velocity; an aircraft flying level at constant velocity']
        ]
      },
      {
        type: 'visual',
        component: 'EquilibriumSim',
        id: 'p2-equilibrium-visual',
        title: 'Four force arrangements, four different outcomes',
        caption:
          'Choose an arrangement and see whether the body stays at rest, slides, spins, or does both.',
        description:
          'A rectangular body is acted on by two forces in one of four arrangements. Balanced forces on the same line leave it at rest. Unbalanced forces make it slide. A couple makes it spin in place. A single off-centre force makes it slide and spin.',
        notice: [
          'A body at rest needs both zero resultant force and zero resultant moment.',
          'A couple has zero resultant force but a non-zero moment.',
          'Balanced forces on the same line produce no turning effect.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Try this: before choosing each arrangement, predict whether the body will stay, slide, spin, or do both. Then select it and compare the force and moment readouts with your prediction.'
      },
      { type: 'h3', text: 'The two conditions for equilibrium' },
      {
        type: 'steps',
        items: [
          'The resultant of all the forces acting on the body must be zero. This prevents translational acceleration.',
          'The algebraic sum of the moments of all the forces about any point must be zero. This prevents rotational acceleration.',
          'When moments are summed, take anticlockwise moments as positive and clockwise moments as negative.'
        ]
      },
      {
        type: 'examtip',
        text: 'Write the two conditions as two separate sentences in an examination answer. “Forces balance” alone is not enough; a couple can have balanced forces and still rotate the body.'
      },
      {
        type: 'memory',
        technique: 'Story: two locks',
        title: 'Two locks before a body is balanced',
        aid: 'A body at rest needs two locks: no net force and no net moment.',
        mapping: [
          {
            cue: 'Lock 1: force',
            target: 'Resultant force = 0',
            meaning: 'The body does not start sliding or changing its linear motion.'
          },
          {
            cue: 'Lock 2: moment',
            target: 'Algebraic sum of moments = 0',
            meaning: 'The body does not start spinning about any point.'
          },
          {
            cue: 'A couple has one lock open',
            target: 'Force sum = 0, moment sum ≠ 0',
            meaning: 'It spins even though the forces are equal and opposite.'
          }
        ],
        recall:
          'A couple has zero resultant force. Explain why it is still not in equilibrium.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'p2-q1',
            question: 'A couple is formed by:',
            options: [
              { value: 'A', text: 'two equal forces acting in the same direction along the same line' },
              { value: 'B', text: 'two equal, opposite, parallel forces whose lines of action do not coincide' },
              { value: 'C', text: 'any two forces acting at the same point' },
              { value: 'D', text: 'three forces whose resultant is zero' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. The forces must be equal, opposite, parallel and on separate lines.',
            wrongFeedback:
              'A couple needs two equal and opposite parallel forces whose lines of action are separate.'
          },
          {
            id: 'p2-q2',
            question: 'A book lying at rest on a table is in:',
            options: [
              { value: 'A', text: 'dynamic equilibrium' },
              { value: 'B', text: 'static equilibrium' },
              { value: 'C', text: 'a couple' },
              { value: 'D', text: 'unstable motion' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. It is at rest, with its weight balanced by the normal reaction from the table.',
            wrongFeedback:
              'The book is not moving and its state is not changing, so it is in static equilibrium.'
          },
          {
            id: 'p2-q3',
            question: 'For a body to be in equilibrium, which pair of conditions must hold?',
            options: [
              { value: 'A', text: 'Resultant force = 0 and resultant moment = 0' },
              { value: 'B', text: 'Resultant force = 0 only' },
              { value: 'C', text: 'Resultant moment = 0 only' },
              { value: 'D', text: 'Resultant force > 0 and resultant moment > 0' }
            ],
            correctValue: 'A',
            correctFeedback:
              'Correct. Both translational and rotational equilibrium are required.',
            wrongFeedback:
              'One condition prevents sliding and the other prevents spinning. Both are needed.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-3',
    number: 3,
    title: 'The principle of moments at work',
    objective:
      'State the principle of moments, describe its verification with a metre rule, and solve see-saw and metre-rule problems by choosing a sensible pivot.',
    blocks: [
      {
        type: 'p',
        text: 'A see-saw can balance a small child far from the pivot against a heavier child close to it. The two weights are different, but their turning effects can be equal. The rule that connects them is the principle of moments.'
      },
      {
        type: 'definition',
        label: 'Principle of moments',
        text: 'For a body in equilibrium about a pivot, the sum of the anticlockwise moments about that pivot is equal to the sum of the clockwise moments about the same pivot.'
      },
      { type: 'formula', text: 'Sum of anticlockwise moments = sum of clockwise moments' },
      {
        type: 'p',
        text: 'The principle is a consequence of rotational equilibrium: the algebraic sum of the moments is zero. It works for any pivot, but choosing the pivot carefully can remove an unknown force from the equation because a force acting through the pivot has zero moment.'
      },
      {
        type: 'visual',
        component: 'MetreRuleLab',
        id: 'p3-rule-visual',
        title: 'Balance the metre rule',
        caption:
          'Move the weights and the fulcrum until the clockwise and anticlockwise moments are equal. The rule levels only when the moments balance.',
        description:
          'A metre rule rests on a movable fulcrum. A weight on each side produces a moment about the fulcrum. Bars show the clockwise and anticlockwise moments, and the rule tilts until the two moments are equal.',
        notice: [
          'The moment is force × distance from the fulcrum, not distance along the rule from one end.',
          'Moving a weight farther from the fulcrum increases its moment.',
          'Balance occurs when the two opposite moments are equal, not when the two weights are equal.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Try this: start balanced, then raise the left mass to 60 gf. Predict which way the rule tilts, then find a new right-hand position that restores balance and check the two moment bars.'
      },
      { type: 'h3', text: 'Verifying the principle with a metre rule' },
      {
        type: 'steps',
        items: [
          'Suspend a metre rule horizontally from a fixed support by a strong thread at a point O, so that it can turn freely.',
          'Suspend two spring balances A and B from the rule, one on each side of O.',
          'Hang slotted weights W₁ from A and W₂ from B. The rule may tilt to one side.',
          'Adjust the weights or the positions of A and B until the rule is horizontal again.',
          'Measure the distance OA = l₁ on the W₁ side and OB = l₂ on the W₂ side.',
          'Calculate W₁l₁ and W₂l₂. Within experimental error they are equal, verifying W₁l₁ = W₂l₂.'
        ]
      },
      {
        type: 'p',
        text: 'The weight W₁ tends to turn the rule clockwise, while W₂ tends to turn it anticlockwise. When the rule is horizontal, clockwise moment = anticlockwise moment.'
      },
      { type: 'h3', text: 'Worked example: a see-saw' },
      {
        type: 'p',
        text: 'Two children of mass 30 kg and 50 kg sit on one side of a see-saw at 2 m and 2.5 m from the middle. Where must a 74 kg adult sit on the other side to balance them? Take g as the same for all, so use kgf for weight.'
      },
      {
        type: 'steps',
        items: [
          'Choose the middle of the see-saw as the pivot. Both children are on the left, so both produce anticlockwise moments.',
          'Anticlockwise moment = 30 kgf × 2 m + 50 kgf × 2.5 m = 60 + 125 = 185 kgf m.',
          'Let the adult sit x metres from the middle on the right. Adult’s clockwise moment = 74 × x kgf m.',
          'Principle of moments: 74x = 185.',
          'x = 185 ÷ 74 = 2.5 m.',
          'The adult sits 2.5 m from the middle on the opposite side.'
        ]
      },
      {
        type: 'visual',
        component: 'SeesawVisual',
        id: 'p3-seesaw-visual',
        title: 'Building the see-saw calculation',
        caption:
          'The children’s moments add to 185 kgf m. The adult must sit 2.5 m from the pivot to supply the same clockwise moment.',
        description:
          'A see-saw with two children on the left, at 2 m and 2.5 m from the pivot, and an adult on the right. Step by step the moment arrows and numbers appear, then the adult is placed at 2.5 m and the beam levels.',
        notice: [
          'Both children are on the same side, so their moments add.',
          'The heavier child sits closer to the pivot, but still contributes a large moment.',
          'The beam levels when the total clockwise moment equals the total anticlockwise moment.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Try this: pause at stage 2. Calculate the adult’s distance yourself before stepping to stage 3, then compare your value with 2.5 m.'
      },
      { type: 'h3', text: 'Worked example: a metre rule on a 60 cm pivot' },
      {
        type: 'p',
        text: 'A uniform metre rule rests horizontally on a knife edge at the 60 cm mark when a mass of 10 g is suspended from one end. Which end must it be, and what is the mass of the rule?'
      },
      {
        type: 'steps',
        items: [
          'The rule is uniform, so its weight acts at its midpoint, the 50 cm mark. That is 10 cm to the left of the pivot and produces an anticlockwise moment.',
          'To balance it, the 10 g mass must produce a clockwise moment, so it must hang from the 100 cm end on the right of the pivot.',
          'Its distance from the pivot is 100 − 60 = 40 cm.',
          'Let the mass of the rule be M grams. Principle of moments: M × 10 = 10 × 40.',
          'M = 400 ÷ 10 = 40 g.'
        ]
      },
      {
        type: 'p',
        text: 'The mass must be suspended at the 100 cm end. If it were hung from the zero end, both the rule’s weight and the 10 g mass would produce anticlockwise moments, and the rule could not balance there.'
      },
      { type: 'h3', text: 'Worked example: a rule supported by a spring balance' },
      {
        type: 'p',
        text: 'A uniform metre rule AB is pivoted at A (the zero mark) and held horizontal by a spring balance at B (the 100 cm mark). A 40 kgf weight hangs at the 40 cm mark. Find the spring-balance reading when (i) the rule’s mass is negligible and (ii) the rule has mass 20 kg.'
      },
      {
        type: 'visual',
        component: 'SpringRuleVisual',
        id: 'p3-spring-visual',
        title: 'Two readings from the same rule',
        caption:
          'With a negligible rule the spring reads 16 kgf. When the rule itself weighs 20 kgf at its midpoint, the reading rises to 26 kgf.',
        description:
          'Two diagrams of a metre rule pivoted at the zero end. A 40 kgf weight acts at 40 cm and a spring balance pulls up at 100 cm. In the second diagram the rule’s own 20 kgf weight acts at 50 cm.',
        notice: [
          'Take moments about the pivot at A so the pivot reaction has zero moment.',
          'The 40 kgf weight is 0.40 m from A and the spring is 1.00 m from A.',
          'The rule’s weight acts at 50 cm, the midpoint of a uniform rule.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Try this: cover the two answers. Take moments about A for each diagram, then uncover the readings and check both calculations.'
      },
      {
        type: 'steps',
        items: [
          '(i) Negligible rule: clockwise moment about A = 40 × 40 = 1600 kgf cm. This must equal the anticlockwise moment F × 100. So F = 1600 ÷ 100 = 16 kgf.',
          '(ii) Rule of mass 20 kg: its weight 20 kgf acts at 50 cm, adding 20 × 50 = 1000 kgf cm clockwise.',
          'Total clockwise moment = 1600 + 1000 = 2600 kgf cm.',
          'F × 100 = 2600, so F = 26 kgf.'
        ]
      },
      {
        type: 'examtip',
        text: 'For a uniform rule, write “weight acts at the midpoint” before substituting. If the pivot is at one end, the rule’s own weight still acts at 50 cm from that end, not at the far end.'
      },
      {
        type: 'misconception',
        text: 'Using the distance from the end of the rule instead of the distance from the pivot is the most common error. Measure every distance from the point about which you are taking moments.'
      },
      { type: 'h3', text: 'A reliable solving routine' },
      {
        type: 'steps',
        items: [
          'Draw the rule or beam and mark every force, including the weight of the uniform body at its midpoint.',
          'Choose a pivot that eliminates an unknown force, usually a hinge or support.',
          'Mark clockwise and anticlockwise moments separately, using distances from that pivot.',
          'Set the two sums equal and solve for the unknown.',
          'Check the answer: a heavier object should sit closer to the pivot, and the units should be force × distance.'
        ]
      },
      {
        type: 'memory',
        technique: 'Chunked procedure',
        title: 'Pivot, moments, balance',
        aid: 'Three chunks: choose the pivot, list the moments, then set clockwise equal to anticlockwise.',
        mapping: [
          {
            cue: 'Pivot',
            target: 'Choose the point to take moments about',
            meaning: 'A force through the pivot has zero moment, so an unknown can disappear.'
          },
          {
            cue: 'Moments',
            target: 'List each force × perpendicular distance with a sign',
            meaning: 'Include the weight of a uniform rule at its midpoint.'
          },
          {
            cue: 'Balance',
            target: 'Set anticlockwise = clockwise and solve',
            meaning: 'The unknown is the only quantity left in the equation.'
          }
        ],
        recall:
          'A uniform metre rule balances on a knife edge at 40 cm. Explain where its weight acts and why that matters.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'p3-q1',
            question: 'The principle of moments states that, for a body in equilibrium:',
            options: [
              { value: 'A', text: 'clockwise moments are always greater than anticlockwise moments' },
              { value: 'B', text: 'sum of anticlockwise moments = sum of clockwise moments' },
              { value: 'C', text: 'all forces are equal' },
              { value: 'D', text: 'the moment of every force is zero' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. The two opposite moment sums are equal about the same pivot.',
            wrongFeedback:
              'Equilibrium requires the anticlockwise and clockwise moment sums to be equal, not the forces.'
          },
          {
            id: 'p3-q2',
            question: 'The weight of a uniform metre rule acts at:',
            options: [
              { value: 'A', text: 'the zero mark' },
              { value: 'B', text: 'the 50 cm mark' },
              { value: 'C', text: 'the 100 cm mark' },
              { value: 'D', text: 'the point where it is supported' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. A uniform rule has its centre of gravity at its midpoint, 50 cm.',
            wrongFeedback:
              'A uniform rule is symmetrical, so its weight acts at its midpoint, the 50 cm mark.'
          },
          {
            id: 'p3-q3',
            question:
              'A 10 N force is 0.2 m from a pivot. If its distance is doubled to 0.4 m, its moment becomes:',
            options: [
              { value: 'A', text: '1 N m' },
              { value: 'B', text: '2 N m' },
              { value: 'C', text: '4 N m' },
              { value: 'D', text: '8 N m' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. Initially M = 10 × 0.2 = 2 N m; doubling d doubles M to 4 N m.',
            wrongFeedback:
              'Moment = F × d. With d doubled from 0.2 m to 0.4 m, the moment doubles from 2 N m to 4 N m.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-4',
    number: 4,
    title: 'Centre of gravity',
    objective:
      'Explain why the weight of a body can be treated as acting at one point, locate the centre of gravity of regular bodies, and describe the plumb-line method for an irregular lamina.',
    blocks: [
      {
        type: 'p',
        text: 'Balance a pen on one finger. There is one point where it stays level. That point is not a special piece of plastic; it is the point where the whole weight of the pen can be treated as acting. That point is the centre of gravity.'
      },
      { type: 'h3', text: 'Why one point can stand for the whole weight' },
      {
        type: 'p',
        text: 'A body is made of a very large number of particles, each pulled by gravity. Because the body is small compared with the Earth, these weight forces are parallel and act in the same direction. They can be replaced by one resultant force equal to the total weight W.'
      },
      {
        type: 'p',
        text: 'That resultant acts at a point G chosen so that the algebraic sum of the moments of all the particle weights about G is zero. At that point the body can be treated as a single particle of weight W.'
      },
      {
        type: 'definition',
        label: 'Centre of gravity',
        text: 'The centre of gravity of a body is the point about which the algebraic sum of the moments of the weights of all its particles is zero. The entire weight of the body may be considered to act at this point.'
      },
      {
        type: 'p',
        text: 'The position of G depends on how the mass is distributed, so it depends on the shape of the body. Bend a uniform wire into a circle and its centre of gravity moves from the middle of the wire to the centre of the circle.'
      },
      { type: 'h3', text: 'Regular bodies' },
      {
        type: 'visual',
        component: 'CentreOfGravityLab',
        id: 'p4-shapes-visual',
        title: 'Find G for regular shapes',
        caption:
          'Choose a shape and see where it balances. For a ring, G lies in the empty space at the centre.',
        description:
          'A selector shows a rod, circular disc, ring, triangular lamina, parallelogram, square, cylinder and cone. The centre of gravity is marked, and the shape balances on a support placed at G. The ring’s G is shown in its hollow centre.',
        notice: [
          'For a rod, disc, sphere and cylinder, G is at the geometric centre.',
          'For a triangular lamina, G is at the intersection of the medians.',
          'For a ring or hollow sphere, G can lie outside the material.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Try this: select the ring, then remove the support. Explain why the ring still balances when the support is exactly at the empty centre, and why it tilts when the support moves away.'
      },
      {
        type: 'table',
        caption: 'Position of the centre of gravity',
        headers: ['Object', 'Position of G'],
        rows: [
          ['Uniform rod', 'Midpoint of the rod'],
          ['Circular disc or ring', 'Centre of the circle'],
          ['Solid or hollow sphere', 'Geometric centre of the sphere'],
          ['Solid or hollow cylinder', 'Midpoint of the axis'],
          ['Solid cone', 'On the axis, at height h/4 from the base'],
          ['Hollow cone', 'On the axis, at height h/3 from the base'],
          ['Triangular lamina', 'Point of intersection of the medians'],
          ['Parallelogram, rectangle or square lamina', 'Point of intersection of the diagonals']
        ]
      },
      {
        type: 'p',
        text: 'The centre of gravity does not have to lie inside the material. A ring balances at its centre, where there is no metal, because the moments of the material on opposite sides cancel about that point.'
      },
      { type: 'h3', text: 'Balancing and the plumb line' },
      {
        type: 'p',
        text: 'A freely suspended body comes to rest with its centre of gravity vertically below the point of suspension. That single fact lets us find G experimentally for a flat shape of irregular outline, called a lamina.'
      },
      {
        type: 'visual',
        component: 'PlumbLineVisual',
        id: 'p4-plumb-visual',
        title: 'Three suspensions, one point',
        caption:
          'Suspend the lamina from three different holes. Each plumb line is marked on the card, and the three lines meet at G.',
        description:
          'An irregular lamina with three holes near its edge is suspended in turn from each hole. As it settles, the hole lies vertically above G, and a plumb line is drawn. The three marked lines intersect at the centre of gravity G.',
        notice: [
          'Each time, the lamina settles with G vertically below the suspension point.',
          'The plumb line passes through the suspension hole and through G.',
          'Two lines would fix the point; a third line checks the result.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Predict first: after the line from hole a is marked, where will the line from hole b cross it? Play the sequence and check that all three lines meet at one point.'
      },
      {
        type: 'steps',
        items: [
          'Make three small holes a, b and c near the edge of the lamina.',
          'Suspend the lamina from hole a on a pin held horizontally in a retort stand, so it can swing freely.',
          'When it comes to rest, hold a plumb line against the lamina and draw the line ad along the thread.',
          'Repeat from hole b and draw line be, then from hole c and draw line cf.',
          'The three lines intersect at a common point G, the centre of gravity of the lamina.'
        ]
      },
      {
        type: 'examtip',
        text: 'A freely suspended body always settles with G vertically below the suspension point. That statement is worth a mark on its own, and it explains why the plumb line passes through G.'
      },
      {
        type: 'misconception',
        text: 'The centre of gravity is not always the “middle” of the outline, and it is not always inside the body. It is defined by the distribution of weight, not by the shape of the boundary.'
      },
      {
        type: 'memory',
        technique: 'Spatial recall',
        title: 'Middle, centre, crossing, or empty middle',
        aid: 'Match each shape family to one picture: middle, centre, crossing, or empty middle.',
        mapping: [
          {
            cue: 'Middle',
            target: 'Rod and cylinder',
            meaning: 'A uniform rod balances at its midpoint; a cylinder at the midpoint of its axis.'
          },
          {
            cue: 'Centre',
            target: 'Disc and sphere',
            meaning: 'The geometric centre is also the centre of gravity.'
          },
          {
            cue: 'Crossing',
            target: 'Triangle, parallelogram, square',
            meaning: 'Medians for a triangle; diagonals for a parallelogram or square.'
          },
          {
            cue: 'Empty middle',
            target: 'Ring and hollow sphere',
            meaning: 'G lies at the centre of the hollow space, outside the material.'
          }
        ],
        recall:
          'Sketch a ring and mark G. Explain why a ring can balance at a point where there is no metal.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'p4-q1',
            question: 'The centre of gravity of a uniform metre rod is at:',
            options: [
              { value: 'A', text: 'one end' },
              { value: 'B', text: 'the 25 cm mark' },
              { value: 'C', text: 'the midpoint' },
              { value: 'D', text: 'any point on the rod' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. A uniform rod has equal mass on either side of its midpoint.',
            wrongFeedback:
              'A uniform rod is symmetrical, so its centre of gravity is at the midpoint.'
          },
          {
            id: 'p4-q2',
            question: 'The centre of gravity of a thin circular ring lies:',
            options: [
              { value: 'A', text: 'on the rim' },
              { value: 'B', text: 'at the centre of the ring, where there is no material' },
              { value: 'C', text: 'at the lowest point of the ring' },
              { value: 'D', text: 'outside the ring altogether' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. The material is symmetrically arranged about the centre, so G is at the centre even though it is empty.',
            wrongFeedback:
              'The ring’s material is symmetrical about its centre, so G is at the centre of the circle, in the empty space.'
          },
          {
            id: 'p4-q3',
            question: 'The plumb-line method is used to:',
            options: [
              { value: 'A', text: 'measure the mass of a lamina' },
              { value: 'B', text: 'find the centre of gravity of an irregular lamina' },
              { value: 'C', text: 'measure the moment of a force' },
              { value: 'D', text: 'balance a metre rule on a knife edge' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. Suspending the lamina from several holes and marking the vertical lines locates G.',
            wrongFeedback:
              'The plumb line marks the vertical through the suspension point; repeating from several holes locates the centre of gravity.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-5',
    number: 5,
    title: 'Uniform circular motion',
    objective:
      'Explain why motion at constant speed around a circle is accelerated, identify the centripetal force in different situations, and explain why centrifugal force is called fictitious.',
    blocks: [
      {
        type: 'p',
        text: 'Whirl a stone tied to a string at a steady speed. The stone does not speed up or slow down, yet you must keep pulling it towards your hand. If the string breaks, the stone flies off along a straight line. Something about circular motion is changing even when the speed is constant.'
      },
      {
        type: 'definition',
        label: 'Uniform circular motion',
        text: 'When a particle moves with constant speed along a circular path, its motion is called uniform circular motion.'
      },
      {
        type: 'p',
        text: 'The word “uniform” refers to speed, not velocity. Speed is a scalar: how fast the particle moves. Velocity is a vector: how fast and in which direction. On a circle the direction changes continuously, so the velocity changes even when the speed does not.'
      },
      {
        type: 'table',
        caption: 'Uniform linear motion compared with uniform circular motion',
        headers: ['Feature', 'Uniform linear motion', 'Uniform circular motion'],
        rows: [
          ['Speed', 'Constant', 'Constant'],
          ['Direction of motion', 'Constant', 'Changes at every point'],
          ['Velocity', 'Constant', 'Variable'],
          ['Acceleration', 'Zero', 'Non-zero; its direction changes'],
          ['Motion is', 'Unaccelerated', 'Accelerated']
        ]
      },
      {
        type: 'visual',
        component: 'CircularVelocityVisual',
        id: 'p5-velocity-visual',
        title: 'The velocity arrow keeps turning',
        caption:
          'The speed readout stays constant while the tangent arrow changes direction. A changing velocity means an acceleration.',
        description:
          'A particle moves around a circle at constant speed. A tangent arrow shows its velocity at each instant. The speed value remains fixed, while the direction of the arrow rotates around the circle.',
        notice: [
          'The velocity is always along the tangent to the circle.',
          'At the top the velocity points one way; a quarter-turn later it points at right angles to that.',
          'Constant speed with changing direction is still an accelerated motion.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Try this: pause the motion at four different points. At each point, state the direction of the velocity arrow, then confirm that the speed readout has not changed.'
      },
      {
        type: 'p',
        text: 'Because the velocity changes, there must be an acceleration. At every point this acceleration is directed towards the centre of the circle. Its direction changes as the particle moves, so the acceleration is variable even though its magnitude stays the same.'
      },
      {
        type: 'definition',
        label: 'Centripetal force',
        text: 'The force directed towards the centre of a circular path, which keeps a body moving in that path, is called the centripetal force.'
      },
      {
        type: 'p',
        text: 'Centripetal force is a role, not a new kind of force. It can be supplied by tension, gravity, electrostatic attraction or friction, depending on the situation.'
      },
      {
        type: 'list',
        items: [
          'An electron in an atom: electrostatic attraction from the nucleus.',
          'A planet around the Sun: gravitational attraction from the Sun.',
          'The Moon around the Earth: gravitational attraction from the Earth.',
          'A stone whirled on a string: tension in the string.',
          'A car turning on a level road: friction between the tyres and the road.'
        ]
      },
      {
        type: 'visual',
        component: 'CentripetalLab',
        id: 'p5-centripetal-visual',
        title: 'Remove the force and the circle ends',
        caption:
          'The inward force keeps the body on the circle. Switch the force off and the body leaves along the tangent in a straight line.',
        description:
          'A body orbits a central object while an arrow shows the centripetal force pointing to the centre. When the force is switched off, the body leaves along the tangent and travels in a straight line.',
        notice: [
          'The centripetal force always points to the centre, at right angles to the velocity.',
          'The body does not fly outwards along a radius when the force is removed.',
          'It leaves along the tangent, because that is the direction of its velocity at that instant.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Predict first: when the force is removed, will the body move straight outwards along a radius or along the tangent? Then cut the string and compare.'
      },
      { type: 'h3', text: 'Centrifugal force' },
      {
        type: 'p',
        text: 'Imagine sitting on a rotating merry-go-round and watching a ball tied in front of you. To you, the ball seems stationary, yet the string is taut. You explain this by inventing a force pulling the ball outwards, away from the centre. That assumed force is called the centrifugal force.'
      },
      {
        type: 'definition',
        label: 'Centrifugal force',
        text: 'A force acting on a body away from the centre of its circular path is called the centrifugal force. It has the same magnitude as the centripetal force but the opposite direction.'
      },
      {
        type: 'p',
        text: 'The centrifugal force is not the reaction to the centripetal force. Action and reaction act on different bodies; here both the tension and the assumed centrifugal force are being used to describe the same ball. The centrifugal force is a fictitious or pseudo force, invented to make Newton’s laws work in a rotating frame of reference.'
      },
      {
        type: 'visual',
        component: 'RotatingFramesVisual',
        id: 'p5-frames-visual',
        title: 'One ball, two observers',
        caption:
          'The observer on the ground sees a circle. The observer on the rotating platform sees the ball at rest and invents an outward force.',
        description:
          'A ball is tied on a rotating merry-go-round. From the ground, the ball travels in a circle because tension provides the centripetal force. From the platform, the ball appears stationary in front of the observer, so an outward centrifugal force is assumed to balance the tension.',
        notice: [
          'The ground observer needs only the real tension force.',
          'The rotating observer needs a fictitious outward force to explain the same motion.',
          'Both descriptions use the same ball; they differ because the observers’ frames differ.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Try this: switch between the two observers and write one sentence for each explaining what that observer sees and which forces that observer uses.'
      },
      {
        type: 'p',
        text: 'If the string breaks, the ground observer sees the ball continue along the tangent in a straight line. The rotating observer, however, sees it move away and describes that motion as caused by the centrifugal force. Only the ground-frame description uses real forces.'
      },
      {
        type: 'examtip',
        text: 'Say “centripetal force acts towards the centre and is provided by tension” rather than “centrifugal force pushes it out”. In the ground frame, centrifugal force is fictitious and must be labelled as such.'
      },
      {
        type: 'misconception',
        text: 'Do not say that a body in uniform circular motion has no acceleration because its speed is constant. Its velocity changes direction, so it is accelerating. Do not call centrifugal force the reaction to centripetal force either.'
      },
      {
        type: 'memory',
        technique: 'Acrostic',
        title: 'Every Planet Must Spin',
        aid: 'Every Planet Must Spin.',
        mapping: [
          {
            cue: 'Every',
            target: 'Electron in an atom',
            meaning: 'Electrostatic attraction from the nucleus supplies the centripetal force.'
          },
          {
            cue: 'Planet',
            target: 'Planet around the Sun',
            meaning: 'Gravitational attraction from the Sun supplies the centripetal force.'
          },
          {
            cue: 'Must',
            target: 'Moon around the Earth',
            meaning: 'Gravitational attraction from the Earth supplies the centripetal force.'
          },
          {
            cue: 'Spin',
            target: 'Stone on a string',
            meaning: 'Tension in the string supplies the centripetal force.'
          }
        ],
        recall:
          'Name the force that supplies the centripetal force in each of the four cases, in the order of the sentence.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'p5-q1',
            question:
              'In uniform circular motion, which quantity remains constant while the direction of motion changes?',
            options: [
              { value: 'A', text: 'velocity' },
              { value: 'B', text: 'speed' },
              { value: 'C', text: 'acceleration' },
              { value: 'D', text: 'both velocity and acceleration' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. The speed is constant; the velocity changes because its direction changes.',
            wrongFeedback:
              '“Uniform” refers to speed. The velocity changes direction, and the acceleration changes direction too.'
          },
          {
            id: 'p5-q2',
            question: 'The centripetal force on a body moving in a circle is directed:',
            options: [
              { value: 'A', text: 'along the tangent' },
              { value: 'B', text: 'away from the centre' },
              { value: 'C', text: 'towards the centre' },
              { value: 'D', text: 'vertically downwards' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. The centripetal force always points towards the centre of the circle.',
            wrongFeedback:
              'Centripetal means centre-seeking: the force points towards the centre, at right angles to the velocity.'
          },
          {
            id: 'p5-q3',
            question: 'The centrifugal force is:',
            options: [
              { value: 'A', text: 'the reaction to the centripetal force' },
              { value: 'B', text: 'a real force acting on the body from outside' },
              { value: 'C', text: 'a fictitious force used in a rotating frame' },
              { value: 'D', text: 'the force that keeps the body on its circular path' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. It is a pseudo force, invented by an observer in the rotating frame.',
            wrongFeedback:
              'Centrifugal force is fictitious. It is not the reaction to centripetal force, and it is not needed in the ground frame.'
          }
        ]
      }
    ]
  }
]

export const flashcards = [
  {
    id: 'p-fc1',
    question: 'State the formula for the moment of a force.',
    answer: 'M = F × d, where d is the perpendicular distance from the pivot to the line of action.'
  },
  {
    id: 'p-fc2',
    question: 'What is the SI unit of a moment, and why is it not written in joules?',
    answer:
      'Newton metre (N m). It is force × distance, but moment is a vector turning effect; the joule is used for work and energy, which are scalars.'
  },
  {
    id: 'p-fc3',
    question: 'Define a couple and give its moment.',
    answer:
      'Two equal, opposite, parallel forces whose lines of action do not coincide. Moment of couple = either force × couple arm.'
  },
  {
    id: 'p-fc4',
    question: 'State the two conditions for equilibrium.',
    answer:
      'The resultant force is zero, and the algebraic sum of the moments of all forces about any point is zero.'
  },
  {
    id: 'p-fc5',
    question: 'State the principle of moments.',
    answer:
      'For a body in equilibrium about a pivot, the sum of anticlockwise moments equals the sum of clockwise moments.'
  },
  {
    id: 'p-fc6',
    question: 'Where does the weight of a uniform metre rule act?',
    answer: 'At its midpoint, the 50 cm mark.'
  },
  {
    id: 'p-fc7',
    question: 'Define the centre of gravity.',
    answer:
      'The point about which the algebraic sum of the moments of the weights of all the particles of the body is zero; the whole weight may be taken to act there.'
  },
  {
    id: 'p-fc8',
    question: 'How is the centre of gravity of an irregular lamina found?',
    answer:
      'Suspend it from three holes in turn, draw the plumb line each time, and take the intersection of the three lines.'
  },
  {
    id: 'p-fc9',
    question: 'Why is uniform circular motion accelerated?',
    answer:
      'The speed is constant but the direction of velocity changes continuously, so the velocity changes.'
  },
  {
    id: 'p-fc10',
    question: 'Distinguish centripetal and centrifugal force.',
    answer:
      'Centripetal force is real and directed towards the centre. Centrifugal force is fictitious, directed away from the centre, and assumed by an observer in the rotating frame.'
  }
]

export const memoryWorkshop = {
  title: 'Build the turning-effect and balance map',
  objective:
    'Organise the chapter as a chain from force and distance to moment, equilibrium and the two circular-motion forces, instead of memorising scattered definitions.',
  intro: [
    'The chapter has one central idea: a force can turn a body when its line of action misses the pivot. Every later idea either measures that turning effect or balances it.',
    'Say the condition with every formula. A moment needs a pivot; the principle of moments needs equilibrium; a centripetal force needs a centre and a real agent.'
  ],
  sections: [
    {
      title: 'From force to moment',
      note: 'The same force can produce very different turning effects.',
      headers: ['Quantity', 'Formula or rule', 'What changes it'],
      rows: [
        ['Moment of a force', 'M = F × d', 'Size of force; perpendicular distance from pivot'],
        ['Moment of a couple', 'M = F × d', 'Either force; gap between the two force lines'],
        ['Principle of moments', 'ACW moments = CW moments', 'Positions and sizes of the weights about the pivot']
      ]
    },
    {
      title: 'The two equilibrium locks',
      note: 'Both locks must be closed for a body to remain in its state of rest or uniform motion.',
      headers: ['Lock', 'Condition', 'What it prevents'],
      rows: [
        ['Force lock', 'Resultant force = 0', 'Sliding or change of linear motion'],
        ['Moment lock', 'Algebraic sum of moments = 0', 'Spinning or change of rotational motion'],
        ['A couple', 'Force lock closed, moment lock open', 'Explains rotation with no drift']
      ]
    },
    {
      title: 'Where is G?',
      note: 'Use the shape family, not the outline alone.',
      headers: ['Shape family', 'Position of G'],
      rows: [
        ['Rod, cylinder', 'Midpoint of the rod or axis'],
        ['Disc, sphere', 'Geometric centre'],
        ['Triangle', 'Intersection of the medians'],
        ['Parallelogram, rectangle, square', 'Intersection of the diagonals'],
        ['Ring, hollow sphere', 'Centre of the hollow space, outside the material']
      ]
    },
    {
      title: 'Circular motion: real and invented forces',
      note: 'Keep the frame of reference explicit.',
      headers: ['Term', 'Direction', 'Status'],
      rows: [
        ['Centripetal force', 'Towards the centre', 'Real; supplied by tension, gravity or electrostatic attraction'],
        ['Centrifugal force', 'Away from the centre', 'Fictitious; used by an observer in the rotating frame'],
        ['Velocity in UCM', 'Along the tangent', 'Real; direction changes continuously'],
        ['Speed in UCM', 'Scalar', 'Constant in uniform circular motion']
      ]
    }
  ],
  recall:
    'Cover the tables. Rebuild them from memory, then explain the difference between a couple and two balanced forces on the same line.',
  flashcards
}

export const revision = {
  rapidSheet: [
    'Moment of a force = force × perpendicular distance from the pivot; SI unit N m.',
    'The perpendicular distance is measured at 90° to the line of action, not along the body.',
    'Anticlockwise moments are taken positive and clockwise moments negative in this chapter.',
    'A couple is two equal, opposite, parallel forces whose lines of action do not coincide; its moment is F × d.',
    'A body in equilibrium has zero resultant force and zero algebraic sum of moments.',
    'The principle of moments: about a pivot, sum of anticlockwise moments = sum of clockwise moments.',
    'A uniform metre rule has its weight acting at the 50 cm mark.',
    'The centre of gravity is the point about which the moments of all particle weights cancel; it may lie outside the material.',
    'The plumb-line method locates G for an irregular lamina by suspending it from three holes.',
    'Uniform circular motion has constant speed but changing velocity, so it is accelerated.',
    'Centripetal force acts towards the centre; centrifugal force is a fictitious outward force used in a rotating frame.'
  ],
  definitions: [
    {
      term: 'Moment of a force',
      meaning:
        'The turning effect of a force about a pivot, equal to force × perpendicular distance of its line of action from the pivot.'
    },
    {
      term: 'Couple',
      meaning:
        'Two equal and opposite parallel forces whose lines of action do not coincide; it produces rotation without translation.'
    },
    {
      term: 'Equilibrium',
      meaning:
        'The state of a body when the forces on it produce no change in its state of rest or of uniform linear or rotational motion.'
    },
    {
      term: 'Principle of moments',
      meaning:
        'For a body in equilibrium about a pivot, the sum of anticlockwise moments equals the sum of clockwise moments.'
    },
    {
      term: 'Centre of gravity',
      meaning:
        'The point about which the algebraic sum of the moments of the weights of all particles of a body is zero; the whole weight may be taken to act there.'
    },
    {
      term: 'Uniform circular motion',
      meaning: 'Motion of a particle with constant speed along a circular path.'
    },
    {
      term: 'Centripetal force',
      meaning:
        'The force directed towards the centre of a circular path that keeps a body moving in that path.'
    },
    {
      term: 'Centrifugal force',
      meaning:
        'A fictitious force, equal in magnitude to the centripetal force but directed away from the centre, assumed by an observer in a rotating frame.'
    }
  ],
  comparisons: [
    {
      pair: 'Translational vs rotational motion',
      difference:
        'Translation moves the whole body along a path; rotation turns it about a fixed axis or pivot.'
    },
    {
      pair: 'Moment vs couple',
      difference:
        'A moment is the turning effect of one force about a pivot; a couple is a pair of equal, opposite, parallel forces producing rotation with zero resultant force.'
    },
    {
      pair: 'Static vs dynamic equilibrium',
      difference:
        'Static equilibrium is rest with no change of state; dynamic equilibrium is uniform motion with no change of velocity.'
    },
    {
      pair: 'Speed vs velocity in UCM',
      difference:
        'Speed is constant; velocity changes because its direction changes continuously.'
    },
    {
      pair: 'Centripetal vs centrifugal force',
      difference:
        'Centripetal force is real and points to the centre; centrifugal force is fictitious, points away, and is used in a rotating frame.'
    },
    {
      pair: 'Centre of gravity vs geometric centre',
      difference:
        'They coincide for many uniform regular shapes, but not for a ring, a cone or an irregular lamina.'
    }
  ],
  memoryAids: [
    'Every Planet Must Spin: electron, planet, Moon, stone — the four centripetal-force examples in order.',
    'Two locks: no net force and no net moment before a body is balanced.',
    'Pivot, moments, balance: choose the pivot, list the signed moments, then set anticlockwise equal to clockwise.',
    'Ring: the centre of gravity sits in the empty middle.'
  ],
  mistakes: [
    'Using the distance along the body instead of the perpendicular distance from the pivot.',
    'Forgetting that the weight of a uniform rule acts at its midpoint.',
    'Treating two equal and opposite forces as always balanced, even when they form a couple.',
    'Taking moments about different points in the same equation.',
    'Saying a body in uniform circular motion has no acceleration because its speed is constant.',
    'Calling centrifugal force the reaction to centripetal force.',
    'Assuming the centre of gravity must lie inside the material.'
  ],
  reviewQuestions: [
    'A force of 12 N acts 0.25 m from a pivot at 90°. Calculate its moment.',
    'Explain why a door handle is placed as far as possible from the hinges.',
    'A couple is formed by two 8 N forces separated by 0.3 m. Calculate its moment.',
    'State the two conditions for equilibrium and give one example of each type of equilibrium.',
    'A metre rule balances at 55 cm with a 20 g mass at the zero end. Find the mass of the rule.',
    'Describe how you would find the centre of gravity of an irregular lamina.',
    'Why is the centre of gravity of a ring outside its material?',
    'Explain why uniform circular motion is accelerated even though the speed is constant.',
    'Distinguish between centripetal and centrifugal force, including which frame uses each.',
    'A stone on a string is whirled in a circle. Name the force that supplies the centripetal force and state its direction.'
  ]
}
