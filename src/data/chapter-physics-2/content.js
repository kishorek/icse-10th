export const lessonContent = [
  {
    id: 'lesson-1',
    number: 1,
    title: 'Work: the physics meaning',
    objective:
      'Explain when a force does work, calculate W = Fs cos θ, and classify work as positive, zero or negative.',
    blocks: [
      {
        type: 'p',
        text: 'Push a wall as hard as you can. Your muscles tire, yet the wall does not move. Now push a trolley along a level floor and it rolls away. In everyday language both efforts are “work”. In physics only the second one is work done by your push. The difference is displacement.'
      },
      { type: 'h3', text: 'The condition for work' },
      {
        type: 'definition',
        label: 'Work in physics',
        text: 'Work is said to be done when a force acts on a body and the body moves, so that the point of application of the force has a displacement in the direction of the force.'
      },
      {
        type: 'p',
        text: 'Two quantities therefore control the amount of work: the size of the force and the displacement of its point of application along the force. If either is zero, the work is zero. Holding a heavy box still is tiring, but it is not physics work because there is no displacement.'
      },
      {
        type: 'formula',
        text: 'When force and displacement are in the same direction:  W = F × s'
      },
      {
        type: 'p',
        text: 'The SI unit of work is the joule (J). One joule is the work done when a force of one newton moves its point of application one metre in the direction of the force.'
      },
      {
        type: 'visual',
        component: 'WorkBench',
        id: 'wep-work-bench',
        title: 'The work bench',
        caption:
          'Change the force, the displacement and the angle. Watch the work value and its sign, not only the size of the force.',
        description:
          'A block is displaced to the right. A force arrow acts at a chosen angle to the displacement. The panel shows the component of force along the displacement and the value of W = Fs cos θ.',
        notice: [
          'Increasing the force or the displacement increases the magnitude of the work.',
          'At 90° the along-displacement component is zero, so the work is zero.',
          'Above 90° the work becomes negative because the force opposes the displacement.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Force at an angle to the displacement' },
      {
        type: 'p',
        text: 'A force need not point along the displacement. When a child pulls a toy by a string held at an angle, only the part of the force along the floor moves the toy forward. The perpendicular part does not change the forward displacement.'
      },
      {
        type: 'p',
        text: 'Resolve the force into a component F cos θ along the displacement and a component F sin θ perpendicular to it. Only the parallel component does work. This gives the general expression below.'
      },
      {
        type: 'formula',
        text: 'W = F s cos θ    where θ is the angle between the force and the displacement'
      },
      {
        type: 'visual',
        component: 'AngleResolveVisual',
        id: 'wep-angle-resolve',
        title: 'Only the along-displacement component works',
        caption:
          'Play the sequence to tilt the force. The parallel component does work; the perpendicular component does none.',
        description:
          'A force acts on a block at an angle θ. One arrow shows F cos θ along the displacement and another shows F sin θ perpendicular to it. The work value falls to zero at 90°.',
        notice: [
          'The component along the displacement is F cos θ.',
          'The perpendicular component changes direction, not speed along the displacement.',
          'At 90°, cos 90° = 0, so W = 0 even when the force is large.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'Predict first: if the force is 50 N, the displacement is 4 m and the angle is 60°, is the work more or less than 200 J? cos 60° = 0.5, so W = 50 × 4 × 0.5 = 100 J. The angle halves the result.'
      },
      { type: 'h3', text: 'The three special cases' },
      {
        type: 'table',
        caption: 'Angle, sign and meaning',
        headers: ['Angle θ', 'cos θ', 'Work', 'Example'],
        rows: [
          ['0°', '1', 'Positive and maximum, W = Fs', 'Pushing a box in the direction it moves'],
          ['90°', '0', 'Zero', 'Carrying a load horizontally while gravity acts vertically'],
          ['180°', '−1', 'Negative, W = −Fs', 'Friction opposing a sliding box']
        ]
      },
      {
        type: 'p',
        text: 'Zero work therefore occurs when there is no displacement at all, or when the force is perpendicular to the displacement. A force can be enormous and still do no work if its point of application does not move along the force.'
      },
      {
        type: 'visual',
        component: 'ZeroWorkToggle',
        id: 'wep-zero-work',
        title: 'Three zero-work situations',
        caption:
          'Switch between a wall push, a level load and a circular orbit. In each case identify why the displacement along the force is zero.',
        description:
          'Three diagrams show a man pushing a stationary wall, a worker carrying a load horizontally and a satellite in a circular orbit. Each is paired with a zero-work explanation.',
        notice: [
          'No displacement means no work, however large the force.',
          'A force perpendicular to the displacement does no work.',
          'In circular motion the force can be perpendicular to the velocity at every instant.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Positive, zero and negative work' },
      {
        type: 'p',
        text: 'Positive work adds energy to the body: the force has a component in the direction of motion. Negative work removes mechanical energy: the force has a component opposite to the motion. Friction usually does negative work. When a body is lifted, gravity does negative work because the weight points down while the displacement is up.'
      },
      {
        type: 'p',
        text: 'Work is a scalar quantity. It has a sign, but no direction in space. The sign records whether the force transfers energy to the body or removes mechanical energy from it.'
      },
      { type: 'h3', text: 'Variable force: the area under the graph' },
      {
        type: 'p',
        text: 'The formula W = Fs assumes a constant force. If the force changes during the displacement, plot force against displacement. The area enclosed between the graph and the displacement axis gives the work done.'
      },
      {
        type: 'visual',
        component: 'ForceGraphVisual',
        id: 'wep-force-graph',
        title: 'Work as area under a force–displacement graph',
        caption:
          'A constant force gives a rectangle of area Fs. A force rising uniformly from zero gives a triangle of area ½Fs.',
        description:
          'Two force–displacement graphs. The left graph has a constant force line at 20 N over 5 m and a shaded rectangle of area 100 J. The right graph has force rising from 0 to 20 N over 5 m and a shaded triangle of area 50 J.',
        notice: [
          'The height of the graph is force; the width is displacement.',
          'A constant force produces a rectangular area.',
          'A uniformly increasing force produces a triangular area.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Worked example: force at an angle' },
      {
        type: 'steps',
        items: [
          'Given: force F = 40 N, displacement s = 5.0 m, angle θ = 60° between them.',
          'Required: work done by the force.',
          'Choose the formula: W = Fs cos θ because the force is not along the displacement.',
          'Substitute: W = 40 × 5.0 × cos 60° = 40 × 5.0 × 0.5.',
          'Calculate: W = 100 J.',
          'Interpret: the force transfers 100 J of energy to the body along its displacement.'
        ]
      },
      {
        type: 'p',
        text: 'The formula also handles an obtuse angle without a new rule. A force of 80 N acting at 120° to a 2.5 m displacement has cos 120° = −0.5, so W = 80 × 2.5 × (−0.5) = −100 J. The negative sign says that the force is removing mechanical energy from the body, not that the arithmetic has failed.'
      },
      {
        type: 'p',
        text: 'Notice the phrase “displacement of the point of application”. If a force acts on a body but the point where it is applied does not move along the force, no work is done by that force. This is why the normal reaction on a box sliding along a floor does no work: the reaction is vertical, while the displacement is horizontal. It is also why the tension in the string of a pendulum does no work on the bob during an ideal swing, because the tension is perpendicular to the instantaneous velocity.'
      },
      {
        type: 'table',
        caption: 'A quick audit of the sign',
        headers: ['Situation', 'Direction of force compared with displacement', 'Sign of work', 'Energy account'],
        rows: [
          ['Pushing a trolley forward', 'Same direction', 'Positive', 'Energy added to the trolley'],
          ['Friction on a sliding box', 'Opposite direction', 'Negative', 'Mechanical energy removed'],
          ['Carrying a load level', 'Perpendicular', 'Zero', 'No work by gravity along the path'],
          ['Holding a box still', 'No displacement', 'Zero', 'No mechanical transfer by the holding force']
        ]
      },
      {
        type: 'p',
        text: 'The general expression is the scalar product, or dot product, of the force and displacement vectors. We write W = F · s. The dot product multiplies the magnitudes and the cosine of the angle between them, so it produces a scalar. This is the formal reason why work has no direction in space even though force and displacement are vectors.'
      },
      {
        type: 'p',
        text: 'The cosine appears whichever way you resolve the vectors. You may take the component of displacement along the force, which is s cos θ, or the component of force along the displacement, which is F cos θ. Both routes give the same product Fs cos θ. Choosing the route that matches the diagram usually reduces the chance of using the wrong component. The unit of the product is N m, the joule, and the result is independent of the order of multiplication.'
      },
      {
        type: 'steps',
        items: [
          'A rope pulls a sled with 120 N at 25° above the horizontal. The sled moves 8.0 m along the horizontal snow.',
          'Only the horizontal component of the pull does work along the displacement: F cos 25° = 120 × 0.906 = 108.8 N.',
          'Work = 108.8 × 8.0 = 870 J, to two significant figures.',
          'The upward component does not do work along the snow, although it reduces the normal reaction and therefore changes friction.'
        ]
      },
      {
        type: 'examtip',
        text: 'Write the angle you are using, and check that it is the angle between the force and the displacement. If the question gives the angle to the horizontal, you may need 90° minus that angle.'
      },
      {
        type: 'misconception',
        text: 'A common mistake is to say that a person carrying a load horizontally does work against gravity. The load moves horizontally while gravity acts vertically, so the work done by gravity is zero. The person may still do work against friction and may expend internal energy, but those are separate forces.'
      },
      {
        type: 'memory',
        technique: 'Cause-and-effect chain',
        title: 'Along counts, across cancels',
        aid: 'Only the component of force along the displacement does work.',
        mapping: [
          {
            cue: 'Along',
            target: 'Component F cos θ',
            meaning: 'This part points in the direction of the displacement and contributes to W.'
          },
          {
            cue: 'Across',
            target: 'Component F sin θ',
            meaning: 'This part is perpendicular to the displacement and does no work.'
          },
          {
            cue: 'Angle decides',
            target: 'cos θ controls size and sign',
            meaning: 'At 0° cos θ = 1, at 90° it is 0, and at 180° it is −1.'
          }
        ],
        recall:
          'A 60 N force pulls a box 3.0 m along a floor at 60° to the floor. Calculate the work and explain why the upward part of the pull does no work along the floor.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'w1-q1',
            question: 'A force does no work on a body when:',
            options: [
              { value: 'A', text: 'the force is very small' },
              { value: 'B', text: 'the displacement is perpendicular to the force' },
              { value: 'C', text: 'the body is heavy' },
              { value: 'D', text: 'the force is constant' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. At 90°, cos 90° = 0, so W = Fs cos 90° = 0.',
            wrongFeedback:
              'Work needs a displacement along the force. A perpendicular displacement gives zero work even for a large force.'
          },
          {
            id: 'w1-q2',
            question: 'A force of 20 N moves a body 3.0 m at 60° to the displacement. The work done is:',
            options: [
              { value: 'A', text: '60 J' },
              { value: 'B', text: '30 J' },
              { value: 'C', text: '52 J' },
              { value: 'D', text: '0 J' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. W = 20 × 3.0 × cos 60° = 20 × 3.0 × 0.5 = 30 J.',
            wrongFeedback:
              'Use W = Fs cos θ. cos 60° = 0.5, so the work is half of 20 × 3.0.'
          },
          {
            id: 'w1-q3',
            question: 'Which is an example of negative work done on a sliding box?',
            options: [
              { value: 'A', text: 'A push in the direction of sliding' },
              { value: 'B', text: 'The upward normal reaction' },
              { value: 'C', text: 'Friction opposing the sliding' },
              { value: 'D', text: 'A force at 90° to the sliding' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. Friction acts opposite to the displacement, so θ = 180° and W is negative.',
            wrongFeedback:
              'Negative work occurs when the force has a component opposite to the displacement. Friction does exactly that.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-2',
    number: 2,
    title: 'Work by gravity and units of work',
    objective:
      'Use W = mgh for vertical motion, explain why the path does not change the work, and convert between joules, ergs and larger units.',
    blocks: [
      {
        type: 'p',
        text: 'Climb the same vertical height by stairs, by a slope or in a lift. The routes look very different, but the work done against gravity is the same. This lesson explains why, and then fixes the units used to report that work.'
      },
      { type: 'h3', text: 'The force of gravity is mg' },
      {
        type: 'p',
        text: 'The weight of a body of mass m is mg, directed vertically downwards. When the body is lifted through a vertical height h, the displacement along the weight is h. The work done by gravity is therefore −mgh because gravity points down while the displacement is up.'
      },
      {
        type: 'p',
        text: 'The applied force must balance the weight while lifting at constant speed, so the work done by the applied force is +mgh. This work is stored in the body as gravitational potential energy.'
      },
      {
        type: 'formula',
        text: 'Work done by gravity during a vertical rise or fall of height h:  W = m g h'
      },
      {
        type: 'p',
        text: 'The sign depends on the direction. When the body falls, gravity and displacement both point down, so gravity does positive work mgh. When the body rises, gravity does negative work −mgh.'
      },
      { type: 'h3', text: 'The path does not matter' },
      {
        type: 'p',
        text: 'Only the vertical change in height enters W = mgh. Horizontal parts of a journey are perpendicular to the weight and contribute no work by gravity. Stairs contain many horizontal and vertical pieces, but the vertical pieces add up to h. A slope has a longer distance than the vertical height, but the component of the displacement along the weight is still h.'
      },
      {
        type: 'visual',
        component: 'GravityPathsLab',
        id: 'wep-gravity-paths',
        title: 'Stairs, slope and lift: the same vertical height',
        caption:
          'Choose a path and send the body up. The height marker and the work counter stay the same for the same mass and height.',
        description:
          'A body rises through 3 m by stairs, by a straight slope or vertically in a lift. The work shown in each case is mgh = 50 × 10 × 3 = 1500 J.',
        notice: [
          'The distance travelled is different, but the vertical height is the same.',
          'Horizontal motion does no work against gravity.',
          'W = mgh depends on mass, gravitational field strength and vertical height only.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Worked example: lifting a load' },
      {
        type: 'steps',
        items: [
          'Given: mass m = 40 kg, vertical height h = 5.0 m, g = 10 m s⁻².',
          'Required: work done against gravity.',
          'Formula: W = mgh for the vertical height.',
          'Substitute: W = 40 × 10 × 5.0.',
          'Calculate: W = 2000 J = 2.0 kJ.',
          'Interpret: 2.0 kJ of energy is transferred to the load as gravitational potential energy.'
        ]
      },
      {
        type: 'p',
        text: 'If the same load is carried along a 12 m slope that rises 5.0 m, the work against gravity is still 2000 J. The extra distance along the slope does not increase the work against gravity, although friction on the slope would do additional negative work.'
      },
      { type: 'h3', text: 'Units of work' },
      {
        type: 'p',
        text: 'Because work is force × displacement, the SI unit is the newton metre. This unit is given its own name, the joule. The CGS unit is the erg.'
      },
      {
        type: 'table',
        caption: 'Work units and conversions',
        headers: ['Unit', 'Definition', 'Relation to the joule'],
        rows: [
          ['joule (J)', '1 N × 1 m', '1 J'],
          ['kilojoule (kJ)', '1000 J', '10³ J'],
          ['megajoule (MJ)', '10⁶ J', '10⁶ J'],
          ['gigajoule (GJ)', '10⁹ J', '10⁹ J'],
          ['erg', '1 dyne × 1 cm', '10⁻⁷ J'],
          ['kilogram-force metre (kgf m)', '1 kgf × 1 m', '9.8 J']
        ]
      },
      {
        type: 'p',
        text: 'To convert joules to ergs, multiply by 10⁷. To convert ergs to joules, divide by 10⁷. The erg is very small, so laboratory and engineering work is usually reported in joules, kilojoules or megajoules.'
      },
      {
        type: 'visual',
        component: 'UnitLadderLab',
        id: 'wep-unit-ladder',
        title: 'The work-unit ladder',
        caption:
          'Enter a value and choose the starting and finishing units. Predict the conversion before you read it.',
        description:
          'A number line shows joule, kilojoule, megajoule, gigajoule and erg. A selected value converts between the units and the joule equivalent is displayed.',
        notice: [
          '1 J = 10⁷ erg.',
          '1 kJ = 10³ J and 1 MJ = 10⁶ J.',
          'A larger unit gives a smaller numerical value for the same amount of work.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Why the slope does not change the formula' },
      {
        type: 'p',
        text: 'On a slope, the displacement along the slope is longer than the vertical rise, but the weight is vertical. The component of the displacement along the weight is the vertical height h. In vector language, the dot product of the weight mg and the displacement along the slope picks out only the vertical part, so the result is still mgh. The extra path length is perpendicular to the weight and contributes nothing to work by gravity.'
      },
      {
        type: 'p',
        text: 'This is a special property of a uniform gravitational field near the Earth. It is not true for friction, which depends on the length of the path and on the normal reaction. That is why a longer slope can require more work by the applied force even though the work against gravity is unchanged: the applied force must also overcome friction along the longer surface.'
      },
      {
        type: 'steps',
        items: [
          'A 0.50 kg ball falls from a window 12 m above the ground. Take g = 9.8 m s⁻².',
          'The weight is mg = 0.50 × 9.8 = 4.9 N, directed down.',
          'The displacement is 12 m down, so the work done by gravity is W = 4.9 × 12 = 58.8 J.',
          'The work is positive because gravity and the displacement are in the same direction. If the ball were lifted back to the window, gravity would do −58.8 J.'
        ]
      },
      {
        type: 'p',
        text: 'The value of g depends slightly on location, but Class 10 problems usually state either 9.8 m s⁻² or 10 m s⁻². Use the value given in the question. Do not mix the two in one calculation. The kilogram-force is the gravitational force on a 1 kg mass, so 1 kgf = 9.8 N; a kgf m of work is therefore 9.8 J.'
      },
      {
        type: 'examtip',
        text: 'Convert every quantity to SI before substituting. If a height is given in centimetres, change it to metres; if a mass is given in grams, change it to kilograms. Report the final answer with its unit and, where useful, a suitable prefix.'
      },
      {
        type: 'misconception',
        text: 'Using the sloping distance instead of the vertical height is the most common error in W = mgh problems. Another is forgetting the sign: gravity does positive work on a falling body and negative work on a rising body.'
      },
      {
        type: 'memory',
        technique: 'Phrase with explicit mapping',
        title: 'Height hides the path',
        aid: 'For work by gravity, only the vertical height matters.',
        mapping: [
          {
            cue: 'Height',
            target: 'Use the vertical change h',
            meaning: 'The formula is mgh, not mg times the distance along a slope.'
          },
          {
            cue: 'Hides',
            target: 'Horizontal motion contributes nothing',
            meaning: 'A displacement perpendicular to weight does no work by gravity.'
          },
          {
            cue: 'Path',
            target: 'Stairs, slope and lift agree',
            meaning: 'The route may be longer, but the vertical rise is the same.'
          }
        ],
        recall:
          'A 60 kg hiker climbs a 300 m vertical hill by a 900 m path. Calculate the work against gravity and explain why the path length is not used.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'w2-q1',
            question: 'A 2 kg mass is lifted 3 m vertically. Taking g = 10 m s⁻², the work done against gravity is:',
            options: [
              { value: 'A', text: '6 J' },
              { value: 'B', text: '30 J' },
              { value: 'C', text: '60 J' },
              { value: 'D', text: '600 J' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. W = mgh = 2 × 10 × 3 = 60 J.',
            wrongFeedback: 'Use W = mgh with mass in kg and height in metres: 2 × 10 × 3.'
          },
          {
            id: 'w2-q2',
            question: 'One joule is equal to:',
            options: [
              { value: 'A', text: '10⁵ erg' },
              { value: 'B', text: '10⁷ erg' },
              { value: 'C', text: '10⁻⁷ erg' },
              { value: 'D', text: '1 erg' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. 1 J = 1 N × 1 m = 10⁵ dyne × 10² cm = 10⁷ erg.',
            wrongFeedback:
              'Convert both the force and the distance: 1 N = 10⁵ dyne and 1 m = 10² cm.'
          },
          {
            id: 'w2-q3',
            question: 'A body falls 4 m. The work done by gravity on it is:',
            options: [
              { value: 'A', text: 'negative, because gravity points down' },
              { value: 'B', text: 'zero, because the body is falling' },
              { value: 'C', text: 'positive, because gravity and displacement are in the same direction' },
              { value: 'D', text: 'equal to the mass only' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. Gravity and the downward displacement are in the same direction, so gravity does positive work mgh.',
            wrongFeedback:
              'Positive work means the force has a component along the displacement. A falling body satisfies this for gravity.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-3',
    number: 3,
    title: 'Power and its units',
    objective:
      'Define power, calculate P = W/t and P = Fv, convert power units, and separate power from work.',
    blocks: [
      {
        type: 'p',
        text: 'Two cranes lift the same load to the same roof. They do the same work, but one finishes in half the time. The faster crane has twice the power. Power is not the amount of work; it is the rate at which the work is done.'
      },
      {
        type: 'definition',
        label: 'Power',
        text: 'Power is the rate of doing work. It is the work done divided by the time taken.'
      },
      {
        type: 'formula',
        text: 'P = W / t'
      },
      {
        type: 'p',
        text: 'Power is a scalar quantity. Its SI unit is the watt (W), where one watt is one joule per second. If a machine does 600 J of work in 3 s, its power is 200 W.'
      },
      {
        type: 'visual',
        component: 'PowerRaceLab',
        id: 'wep-power-race',
        title: 'Same work, different rate',
        caption:
          'Both cranes do 5000 J. Change crane B’s time and compare the two power values.',
        description:
          'Two cranes lift identical loads through the same height. Crane A takes 10 s; crane B takes a chosen time. The power of each crane is displayed and the loads rise at different rates.',
        notice: [
          'The work is the same for both cranes.',
          'A shorter time gives a larger power.',
          'Power compares the rate, not the total amount of work.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Power in terms of force and speed' },
      {
        type: 'p',
        text: 'If a constant force F moves a body through displacement s in time t, then W = Fs and P = Fs/t. Since s/t is the average speed v, power can be written as force times speed.'
      },
      {
        type: 'formula',
        text: 'P = F × v'
      },
      {
        type: 'p',
        text: 'This form is useful for vehicles and machines that exert a steady force while moving at constant speed. A car needing 2000 N to overcome resistance at 15 m s⁻¹ uses 30 000 W, or 30 kW.'
      },
      {
        type: 'visual',
        component: 'PowerForceSpeedLab',
        id: 'wep-power-force-speed',
        title: 'Power as force times speed',
        caption:
          'Set a force and a steady speed. Predict the effect of doubling either one before reading the power.',
        description:
          'A cart is pulled by a force F at a constant speed v. The power readout is calculated from P = Fv and updates as either slider moves.',
        notice: [
          'Doubling the force doubles the power at the same speed.',
          'Doubling the speed doubles the power for the same force.',
          'The unit of Fv is N m s⁻¹, which is J s⁻¹ or W.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Units of power' },
      {
        type: 'table',
        caption: 'Power units',
        headers: ['Unit', 'Value in watts', 'Typical use'],
        rows: [
          ['watt (W)', '1 W', 'Small lamp, small motor'],
          ['kilowatt (kW)', '10³ W', 'Heater, engine, electric motor'],
          ['megawatt (MW)', '10⁶ W', 'Power station, large ship'],
          ['gigawatt (GW)', '10⁹ W', 'National grid, large power station'],
          ['milliwatt (mW)', '10⁻³ W', 'Small electronic device'],
          ['microwatt (µW)', '10⁻⁶ W', 'Sensitive instrument'],
          ['horsepower (HP)', '746 W', 'Older engineering rating']
        ]
      },
      {
        type: 'p',
        text: 'The CGS unit is erg per second: 1 W = 1 J s⁻¹ = 10⁷ erg s⁻¹. Horsepower is not an SI unit; 1 HP = 746 W = 0.746 kW. A 2 HP motor is about 1.5 kW.'
      },
      {
        type: 'visual',
        component: 'WorkPowerToggle',
        id: 'wep-work-vs-power',
        title: 'Work and power are different',
        caption:
          'Compare two cases: the same work in different times, then the same power for different times.',
        description:
          'Two panels compare work, time and power. The first case has equal work but unequal power. The second has equal power but different work because the times differ.',
        notice: [
          'Work is an amount of energy transferred.',
          'Power is the rate of transfer.',
          'Equal work does not mean equal power unless the times are also equal.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Worked examples' },
      {
        type: 'steps',
        items: [
          'A worker lifts a 30 kg load through 4.0 m in 12 s. Take g = 10 m s⁻².',
          'Work done against gravity: W = mgh = 30 × 10 × 4.0 = 1200 J.',
          'Power: P = W/t = 1200/12 = 100 W.',
          'Interpretation: the worker transfers energy at an average rate of 100 J each second.'
        ]
      },
      {
        type: 'steps',
        items: [
          'A pump raises water at 20 kg s⁻¹ through 15 m. Take g = 10 m s⁻².',
          'Work done each second: W = mgh = 20 × 10 × 15 = 3000 J.',
          'Since this is the work in 1 s, the power is 3000 W = 3 kW.',
          'Check: P = Fv also works, because the weight lifted each second is 200 N and the water rises 15 m in 1 s.'
        ]
      },
      { type: 'h3', text: 'Average power and power ratings' },
      {
        type: 'p',
        text: 'The expression P = W/t gives average power over the stated time. A machine may work faster during one part of its motion and slower during another; the average still compares the total work with the total time. The power rating printed on an appliance is usually the rate at which it transfers electrical energy when operating normally, not a guarantee that it transfers exactly that amount every second.'
      },
      {
        type: 'p',
        text: 'A 100 W lamp left on for 10 hours transfers 100 × 10 × 3600 = 3.6 × 10⁶ J, which is 1 kWh. A 2000 W heater left on for half an hour transfers the same energy. The heater has twenty times the power, but it runs for one twentieth of the time, so the energy amounts match. This comparison is the bridge to the next lesson.'
      },
      {
        type: 'steps',
        items: [
          'An electric motor lifts a 12 kg load through 15 m in 6.0 s. Take g = 10 m s⁻².',
          'Useful work against gravity: W = mgh = 12 × 10 × 15 = 1800 J.',
          'Average power: P = W/t = 1800/6.0 = 300 W.',
          'The motor’s electrical input would be larger than 300 W because some energy is dissipated as heat in the windings and bearings.'
        ]
      },
      {
        type: 'p',
        text: 'A useful check is to follow the units through the formula. P = W/t has units J s⁻¹, which is the watt. P = Fv has units N m s⁻¹, and since 1 N m = 1 J, this is again J s⁻¹. If a calculation gives N m s⁻² or N s m⁻¹, the formula has been rearranged incorrectly. Unit checking will not catch every mistake, but it catches many of them.'
      },
      {
        type: 'table',
        caption: 'Typical power ratings for scale',
        headers: ['Device', 'Approximate power', 'Comment'],
        rows: [
          ['Small LED lamp', '5–10 W', 'Low-power lighting'],
          ['Electric fan', '50–100 W', 'Motor plus air movement'],
          ['Television', '80–200 W', 'Depends on size and brightness'],
          ['Electric kettle', '1500–2500 W', 'High power for rapid heating'],
          ['Small car engine', '50–100 kW', 'Mechanical output'],
          ['Large power station unit', '500–1000 MW', 'Electrical output']
        ]
      },
      {
        type: 'p',
        text: 'To convert horsepower, use 1 HP = 746 W. A 3 HP engine therefore develops about 2238 W, or 2.2 kW. Horsepower is still used in vehicle and machinery descriptions, but calculations in this course should normally be done in watts unless the question asks for horsepower.'
      },
      {
        type: 'examtip',
        text: 'Convert time to seconds before dividing. A power answer in kW is often easier to read than one in thousands of watts, but the unit must be stated.'
      },
      {
        type: 'misconception',
        text: 'Do not say that a 100 W lamp “uses 100 J”. It uses 100 J each second. Energy is the amount; power is the rate. Similarly, a 2 kW heater does not necessarily use more energy than a 100 W lamp; it depends on how long each is switched on.'
      },
      {
        type: 'memory',
        technique: 'Contrast phrase with mapping',
        title: 'Rate races, amount rests',
        aid: 'Power is the rate; work and energy are the amounts.',
        mapping: [
          {
            cue: 'Rate',
            target: 'Power P = W/t',
            meaning: 'A rate compares an amount with the time taken.'
          },
          {
            cue: 'Races',
            target: 'Shorter time, larger power',
            meaning: 'The same work done faster means a greater power.'
          },
          {
            cue: 'Amount',
            target: 'Work W or energy E',
            meaning: 'The total transferred does not by itself tell you the power.'
          }
        ],
        recall:
          'Machine A does 900 J in 3 s and machine B does 900 J in 9 s. Which has greater power, and by what factor?'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'w3-q1',
            question: 'The SI unit of power is the:',
            options: [
              { value: 'A', text: 'joule' },
              { value: 'B', text: 'newton' },
              { value: 'C', text: 'watt' },
              { value: 'D', text: 'kilowatt-hour' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. One watt is one joule per second.',
            wrongFeedback:
              'Power is a rate, so its unit is energy per time. That unit is the watt.'
          },
          {
            id: 'w3-q2',
            question: 'A machine does 2400 J of work in 8 s. Its power is:',
            options: [
              { value: 'A', text: '19200 W' },
              { value: 'B', text: '300 W' },
              { value: 'C', text: '0.0033 W' },
              { value: 'D', text: '2408 W' }
            ],
            correctValue: 'B',
            correctFeedback: 'Correct. P = W/t = 2400/8 = 300 W.',
            wrongFeedback: 'Divide the work by the time in seconds: 2400 ÷ 8.'
          },
          {
            id: 'w3-q3',
            question: 'A force of 400 N moves a car at a steady 5 m s⁻¹. The power is:',
            options: [
              { value: 'A', text: '80 W' },
              { value: 'B', text: '405 W' },
              { value: 'C', text: '2000 W' },
              { value: 'D', text: '0.0125 W' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. P = Fv = 400 × 5 = 2000 W.',
            wrongFeedback: 'Use P = Fv for a steady speed: 400 × 5.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-4',
    number: 4,
    title: 'Energy and its units',
    objective:
      'Define energy as the capacity to do work, convert between energy units, and distinguish energy from power.',
    blocks: [
      {
        type: 'p',
        text: 'A stretched bow can send an arrow. A charged battery can run a torch. A raised stone can drive a peg into the ground when it falls. Each body has stored capacity to do work, and that capacity is called energy.'
      },
      {
        type: 'definition',
        label: 'Energy',
        text: 'The energy of a body is its capacity to do work. The amount of energy possessed by a body is equal to the amount of work it can do when its energy is released.'
      },
      {
        type: 'p',
        text: 'Energy is a scalar quantity. Its SI unit is the joule, the same as work, because energy and work are measured in the same currency. When work is done on a body, its energy increases; when the body does work, its energy decreases.'
      },
      { type: 'h3', text: 'Where the units come from' },
      {
        type: 'p',
        text: 'The joule is the SI unit. The erg is the CGS unit: 1 erg = 1 dyne cm and 1 J = 10⁷ erg. Larger amounts of energy are often reported in kilojoules, megajoules or gigajoules, using the same prefixes as power.'
      },
      {
        type: 'p',
        text: 'Domestic electricity is sold in kilowatt-hours. A watt-hour is the energy transferred by a 1 W device in 1 hour, and a kilowatt-hour is 1000 watt-hours. Heat is also measured in calories, and atomic and particle energies in electron volts.'
      },
      {
        type: 'table',
        caption: 'Energy units and conversions',
        headers: ['Unit', 'Meaning', 'Value in joules'],
        rows: [
          ['joule (J)', 'SI unit of energy', '1 J'],
          ['erg', 'CGS unit of energy', '10⁻⁷ J'],
          ['watt-hour (Wh)', '1 W for 1 hour', '3600 J = 3.6 kJ'],
          ['kilowatt-hour (kWh)', '1 kW for 1 hour', '3.6 × 10⁶ J = 3.6 MJ'],
          ['calorie (cal)', 'heat to raise 1 g water by 1°C', '4.18 J'],
          ['kilocalorie (kcal)', '1000 cal', '4180 J'],
          ['electron volt (eV)', 'energy gained by an electron through 1 V', '1.6 × 10⁻¹⁹ J']
        ]
      },
      {
        type: 'visual',
        component: 'EnergyScaleTask',
        id: 'wep-energy-scale',
        title: 'Put the energy units in order',
        caption:
          'Arrange the five amounts from smallest to largest, then check the joule values.',
        description:
          'Five energy amounts are listed: electron volt, joule, calorie, watt-hour and kilowatt-hour. The student orders them and checks against the joule equivalents.',
        notice: [
          'The electron volt is far smaller than the joule.',
          'The calorie is a little larger than the joule.',
          'The kilowatt-hour is millions of joules.'
        ],
        props: {}
      },
      {
        type: 'visual',
        component: 'KwhMeterLab',
        id: 'wep-kwh-meter',
        title: 'The domestic energy meter',
        caption:
          'Set an appliance power and a time. Run the meter and compare the kWh reading with the joule value.',
        description:
          'A meter disc rotates and a counter advances as an appliance uses energy. The panel shows power, time, energy in kWh and the equivalent in joules.',
        notice: [
          'Energy in kWh = power in kW × time in hours.',
          'A 2 kW appliance for 0.5 h uses the same 1 kWh as a 1 kW appliance for 1 h.',
          'The joule value is much larger because 1 kWh = 3.6 × 10⁶ J.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Energy is not power' },
      {
        type: 'p',
        text: 'Energy is the amount transferred; power is the rate of transfer. A 2 kW kettle and a 100 W lamp can both use 1 kWh, but the kettle uses it in about half an hour while the lamp takes ten hours. The energy is the same; the power is different.'
      },
      {
        type: 'visual',
        component: 'EnergyPowerToggle',
        id: 'wep-energy-vs-power',
        title: 'Energy and power side by side',
        caption:
          'Compare the same energy at different powers, then the same power for different times.',
        description:
          'Two comparison panels show energy, power and time. One keeps energy fixed while power changes; the other keeps power fixed while time and energy change.',
        notice: [
          'A watt and a watt-hour are not the same kind of unit.',
          'The watt-hour contains a hidden multiplication by time.',
          'Power tells you how fast energy is transferred, not how much is transferred.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Worked examples' },
      {
        type: 'steps',
        items: [
          'Convert 5 kWh to joules.',
          '1 kWh = 3.6 × 10⁶ J.',
          '5 kWh = 5 × 3.6 × 10⁶ J.',
          'Answer: 1.8 × 10⁷ J.'
        ]
      },
      {
        type: 'steps',
        items: [
          'An electron has 4.0 × 10⁻¹⁹ J of energy. Express it in eV.',
          '1 eV = 1.6 × 10⁻¹⁹ J, so divide by 1.6 × 10⁻¹⁹.',
          'Number of eV = (4.0 × 10⁻¹⁹)/(1.6 × 10⁻¹⁹) = 2.5.',
          'Answer: 2.5 eV.'
        ]
      },
      { type: 'h3', text: 'Reading an electricity bill' },
      {
        type: 'p',
        text: 'An electricity meter measures energy in kilowatt-hours, not power in kilowatts. If a 100 W lamp runs for 10 hours, it uses 0.10 kW × 10 h = 1 kWh. If a 2 kW heater runs for 30 minutes, it uses 2 kW × 0.5 h = 1 kWh. The meter reading increases by the same amount even though the two appliances have very different power ratings.'
      },
      {
        type: 'p',
        text: 'This is why a high-power appliance used briefly can cost the same as a low-power appliance used for a long time. The bill depends on energy, and energy depends on both power and time. A power rating alone does not tell you how much energy will be used.'
      },
      {
        type: 'steps',
        items: [
          'A 1500 W kettle is used for 4.0 minutes. Calculate the energy used in kWh.',
          'Convert power to kW: 1500 W = 1.5 kW.',
          'Convert time to hours: 4.0 minutes = 4.0/60 h = 0.067 h.',
          'Energy = 1.5 × 0.067 = 0.10 kWh, to two significant figures.',
          'In joules: 0.10 × 3.6 × 10⁶ = 3.6 × 10⁵ J.'
        ]
      },
      {
        type: 'p',
        text: 'The calorie is defined by a heating experiment, so it is a heat-energy unit. The value 4.18 J is the mechanical equivalent of heat. A food Calorie written with a capital C is a kilocalorie, so a snack labelled 250 Cal contains about 250 000 cal, or about 1.0 × 10⁶ J. The electron volt is chosen because atomic energies are tiny; expressing them in joules would require many powers of ten.'
      },
      {
        type: 'examtip',
        text: 'Check whether the question asks for energy or power before choosing a unit. A kWh is energy; a kW is power. A Wh is energy; a W is power.'
      },
      {
        type: 'misconception',
        text: 'The most common error is to treat the kilowatt-hour as a unit of power because it contains “watt”. It contains “hour” as well, so it is power multiplied by time: energy. Another error is to forget that a food Calorie is usually a kilocalorie.'
      },
      {
        type: 'memory',
        technique: 'Acrostic sentence',
        title: 'Every Joule Can Walk Kilometres',
        aid: 'Energy units in order of size, from the electron volt to the kilowatt-hour.',
        mapping: [
          { cue: 'Every', target: 'electron volt (eV)', meaning: 'The smallest unit listed.' },
          { cue: 'Joule', target: 'joule (J)', meaning: 'The SI unit.' },
          { cue: 'Can', target: 'calorie (cal)', meaning: 'About 4.18 J.' },
          { cue: 'Walk', target: 'watt-hour (Wh)', meaning: '3600 J.' },
          { cue: 'Kilometres', target: 'kilowatt-hour (kWh)', meaning: '3.6 million joules.' }
        ],
        recall:
          'Reconstruct the five energy units from smallest to largest, then state the joule value of each.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'w4-q1',
            question: 'Which is a unit of energy, not power?',
            options: [
              { value: 'A', text: 'watt' },
              { value: 'B', text: 'kilowatt' },
              { value: 'C', text: 'kilowatt-hour' },
              { value: 'D', text: 'joule per second' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. The kilowatt-hour is power × time, so it measures energy.',
            wrongFeedback:
              'A watt is one joule per second, which is power. The kilowatt-hour includes time and is energy.'
          },
          {
            id: 'w4-q2',
            question: 'One kilowatt-hour is equal to:',
            options: [
              { value: 'A', text: '1000 J' },
              { value: 'B', text: '3600 J' },
              { value: 'C', text: '3.6 × 10⁶ J' },
              { value: 'D', text: '746 J' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. 1 kW × 1 h = 1000 W × 3600 s = 3.6 × 10⁶ J.',
            wrongFeedback:
              'Convert 1 kW to 1000 W and 1 hour to 3600 s, then multiply.'
          },
          {
            id: 'w4-q3',
            question: 'An energy of 4.0 × 10⁻¹⁹ J is equal to:',
            options: [
              { value: 'A', text: '0.4 eV' },
              { value: 'B', text: '2.5 eV' },
              { value: 'C', text: '6.4 eV' },
              { value: 'D', text: '4.0 eV' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. Divide by 1.6 × 10⁻¹⁹ J per eV to get 2.5 eV.',
            wrongFeedback:
              'Use 1 eV = 1.6 × 10⁻¹⁹ J and divide the energy in joules by that value.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-5',
    number: 5,
    title: 'Potential and kinetic energy',
    objective:
      'Derive and apply U = mgh and K = ½mv², use the work-energy theorem, and recognise translational, rotational and vibrational kinetic energy.',
    blocks: [
      {
        type: 'p',
        text: 'A raised stone and a moving stone can both do work. The raised stone stores energy because of its position; the moving stone has energy because of its motion. These are the two forms of mechanical energy.'
      },
      {
        type: 'definition',
        label: 'Mechanical energy',
        text: 'Mechanical energy is the energy possessed by a body because of its state of rest or motion. It is the sum of its potential energy and kinetic energy.'
      },
      { type: 'h3', text: 'Potential energy' },
      {
        type: 'definition',
        label: 'Potential energy',
        text: 'The energy possessed by a body by virtue of its changed position or configuration is called potential energy.'
      },
      {
        type: 'p',
        text: 'A body at a height has gravitational potential energy because work was done against gravity to lift it. A compressed spring or a stretched rubber band has elastic potential energy because work was done to change its shape.'
      },
      { type: 'h3', text: 'Deriving U = mgh' },
      {
        type: 'p',
        text: 'Lift a body of mass m from the ground to a height h at constant speed. The upward force needed is mg. The displacement in the direction of that force is h, so the work done is mgh. This work is stored as gravitational potential energy, taking the ground as the zero level.'
      },
      {
        type: 'formula',
        text: 'Gravitational potential energy:  U = m g h'
      },
      {
        type: 'p',
        text: 'The value of U depends on the chosen zero level. If the ground is zero, a body at height h has U = mgh. If a table top is chosen as zero, the same body may have a smaller or larger value. Only changes in potential energy are physically important.'
      },
      {
        type: 'visual',
        component: 'PeKeRampLab',
        id: 'wep-pe-ke-ramp',
        title: 'Potential energy becomes kinetic energy',
        caption:
          'Release the ball and watch the U and K bars. Predict their values at half the starting height.',
        description:
          'A ball descends a ramp from a chosen height. The potential energy falls and the kinetic energy rises while their total stays constant. The current height and both energies are displayed.',
        notice: [
          'At the top, U is maximum and K is zero if the ball starts from rest.',
          'At the bottom, U is zero and K equals the initial U.',
          'At half the height, U and K are equal.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Kinetic energy and its derivation' },
      {
        type: 'p',
        text: 'The kinetic energy of a moving body is the work it can do before coming to rest. Suppose a body of mass m at speed v is brought to rest by a constant opposing force F over distance s. The work done against the motion is Fs, and this equals the kinetic energy lost.'
      },
      {
        type: 'p',
        text: 'Using F = ma and v² = u² + 2as with final speed zero gives s = v²/(2a). Then K = Fs = ma × v²/(2a) = ½mv². The acceleration cancels, so the result depends only on mass and speed.'
      },
      {
        type: 'formula',
        text: 'Kinetic energy:  K = ½ m v²'
      },
      {
        type: 'p',
        text: 'Because speed is squared, doubling the speed makes the kinetic energy four times as large. A car at 60 km h⁻¹ has four times the kinetic energy it has at 30 km h⁻¹, so it needs about four times the distance to stop under the same braking force.'
      },
      {
        type: 'visual',
        component: 'KeSpeedLab',
        id: 'wep-ke-speed',
        title: 'Kinetic energy and speed',
        caption:
          'Change the speed and watch v² and K. Predict what happens when the speed is doubled.',
        description:
          'A car of fixed mass moves at a chosen speed. The display shows the speed squared and the kinetic energy, making the square dependence visible.',
        notice: [
          'K is proportional to v², not to v.',
          'Doubling v multiplies K by four.',
          'The mass is fixed in this comparison.'
        ],
        props: {}
      },
      { type: 'h3', text: 'The work-energy theorem' },
      {
        type: 'p',
        text: 'When a net force acts along the displacement, it changes the body’s kinetic energy. The work done by the net force equals the change in kinetic energy. This statement is the work-energy theorem.'
      },
      {
        type: 'formula',
        text: 'W_net = K_final − K_initial = ½mv² − ½mu²'
      },
      {
        type: 'p',
        text: 'If friction also acts, use the net work. Positive net work increases K; negative net work decreases K. The theorem is a shortcut that connects force, distance and speed without finding the time.'
      },
      {
        type: 'visual',
        component: 'WorkEnergyVisual',
        id: 'wep-work-energy',
        title: 'Work changes kinetic energy',
        caption:
          'Play the force acting over a distance. The work bar and the change in K stay equal throughout.',
        description:
          'A block with initial speed u is pushed by a constant force over a distance. The work done and the change in kinetic energy are displayed as matching quantities.',
        notice: [
          'The work bar grows as the block moves.',
          'ΔK tracks the work done by the net force.',
          'At the end, W = K_f − K_i.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Kinetic energy and momentum' },
      {
        type: 'p',
        text: 'Momentum is p = mv. Substituting v = p/m into K = ½mv² gives K = p²/(2m), or p = √(2mK). For equal kinetic energies, the lighter body has less momentum. For equal momenta, the lighter body has more kinetic energy.'
      },
      {
        type: 'p',
        text: 'A numerical comparison makes the difference clear. A 4 kg body at 3 m s⁻¹ has p = 12 kg m s⁻¹ and K = 18 J. A 1 kg body at 12 m s⁻¹ has the same momentum of 12 kg m s⁻¹ but K = 72 J. The lighter, faster body carries more kinetic energy for the same momentum, which is one reason a small fast object can do disproportionate damage.'
      },
      {
        type: 'p',
        text: 'The work-energy theorem also explains why the stopping distance grows with the square of speed. If the braking force is fixed, the work it can remove over a distance s is Fs. Setting this equal to the kinetic energy gives s = ½mv²/F. Doubling v therefore quadruples the stopping distance under the same braking force.'
      },
      { type: 'h3', text: 'Three forms of kinetic energy' },
      {
        type: 'visual',
        component: 'KeFormsVisual',
        id: 'wep-ke-forms',
        title: 'Translational, rotational and vibrational kinetic energy',
        caption:
          'Match each picture to the kind of motion: straight-line travel, rotation about an axis, or to-and-fro vibration.',
        description:
          'Three panels show a car moving in a straight line, a wheel rotating about its axis and a string vibrating about a mean position, each labelled with its kinetic-energy form.',
        notice: [
          'Translational kinetic energy belongs to straight-line motion of the whole body.',
          'Rotational kinetic energy belongs to turning about an axis.',
          'Vibrational kinetic energy belongs to to-and-fro motion about a mean position.'
        ],
        props: {}
      },
      {
        type: 'p',
        text: 'A rolling wheel has both translational and rotational kinetic energy. A vibrating molecule may have translational, rotational and vibrational energy at the same time. The formula ½mv² in this chapter is used for translational motion.'
      },
      { type: 'h3', text: 'Worked examples' },
      {
        type: 'steps',
        items: [
          'A 2.0 kg body is raised 5.0 m. Take g = 10 m s⁻².',
          'U = mgh = 2.0 × 10 × 5.0 = 100 J.',
          'If it falls from rest, all of this becomes kinetic energy just before impact.',
          'At the ground, K = 100 J, so ½ × 2.0 × v² = 100 and v = 10 m s⁻¹.'
        ]
      },
      {
        type: 'steps',
        items: [
          'A 1000 kg car moves at 20 m s⁻¹. Calculate K.',
          'K = ½mv² = ½ × 1000 × 20².',
          '20² = 400, so K = ½ × 1000 × 400 = 200 000 J.',
          'Answer: 2.0 × 10⁵ J.'
        ]
      },
      { type: 'h3', text: 'Elastic potential energy' },
      {
        type: 'p',
        text: 'A compressed spring, a stretched rubber band and a bent bow store elastic potential energy. Work is done to change their shape, and the energy is released when they recover it. The amount depends on the material and on how far it is deformed; this chapter treats the idea qualitatively and does not require a spring-constant formula.'
      },
      {
        type: 'p',
        text: 'The two forms of potential energy answer different questions. Gravitational potential energy depends on height in a gravitational field. Elastic potential energy depends on the deformation of an object that can restore its shape. Both are energies of configuration rather than motion.'
      },
      { type: 'h3', text: 'Checking the kinetic-energy derivation' },
      {
        type: 'p',
        text: 'The derivation can be read as a chain of three statements. First, the work done by the stopping force is Fs. Second, Newton’s second law gives F = ma. Third, the equation of motion gives s = v²/(2a) when the final speed is zero. Substituting the second and third into the first gives K = ma × v²/(2a). The acceleration cancels, leaving ½mv². The cancellation is important: the kinetic energy depends on the speed reached, not on how quickly the body was accelerated.'
      },
      {
        type: 'steps',
        items: [
          'A 0.20 kg ball moving at 6.0 m s⁻¹ is stopped by a constant force in 0.50 m.',
          'Initial K = ½ × 0.20 × 6.0² = 3.6 J.',
          'The stopping force does −3.6 J of work, so F × 0.50 = 3.6 and F = 7.2 N.',
          'The same result follows from the work-energy theorem without finding the stopping time.'
        ]
      },
      {
        type: 'p',
        text: 'The work-energy theorem is especially useful when a problem gives force and distance but not time. If the net work is positive, the final kinetic energy is larger than the initial value. If friction does negative work, subtract its magnitude from the work done by the driving force before applying the theorem.'
      },
      {
        type: 'p',
        text: 'Momentum and kinetic energy are both useful, but they answer different questions. Momentum measures the “quantity of motion” and is a vector. Kinetic energy measures the capacity to do work by virtue of motion and is a scalar. A heavy slow body and a light fast body can have the same momentum while having different kinetic energies, because K depends on v² while p depends on v.'
      },
      {
        type: 'examtip',
        text: 'For U = mgh, h is vertical and measured from a stated zero level. For K = ½mv², v must be in m s⁻¹. If mass is in grams, convert it to kilograms before calculating.'
      },
      {
        type: 'misconception',
        text: 'Potential energy does not depend on the path used to reach a height; it depends on the height relative to the chosen zero. Kinetic energy is not the same as momentum: doubling v doubles momentum but quadruples kinetic energy.'
      },
      {
        type: 'memory',
        technique: 'Contrast phrase with mapping',
        title: 'Height holds, speed squares',
        aid: 'Potential energy depends on height; kinetic energy depends on the square of speed.',
        mapping: [
          {
            cue: 'Height holds',
            target: 'U = mgh',
            meaning: 'Position or configuration stores energy.'
          },
          {
            cue: 'Speed squares',
            target: 'K = ½mv²',
            meaning: 'Doubling v multiplies K by four.'
          },
          {
            cue: 'Total',
            target: 'Mechanical energy U + K',
            meaning: 'Without friction, the total stays constant as one form changes into the other.'
          }
        ],
        recall:
          'A ball is released from 5 m. State U at the top, K just before impact and the speed at impact, taking g = 10 m s⁻².'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'w5-q1',
            question: 'The gravitational potential energy of a 2 kg body at 4 m above the ground is:',
            options: [
              { value: 'A', text: '8 J' },
              { value: 'B', text: '40 J' },
              { value: 'C', text: '80 J' },
              { value: 'D', text: '160 J' }
            ],
            correctValue: 'C',
            correctFeedback: 'Correct. U = mgh = 2 × 10 × 4 = 80 J.',
            wrongFeedback: 'Use U = mgh with g = 10 m s⁻²: 2 × 10 × 4.'
          },
          {
            id: 'w5-q2',
            question: 'If the speed of a body doubles while its mass stays the same, its kinetic energy:',
            options: [
              { value: 'A', text: 'doubles' },
              { value: 'B', text: 'quadruples' },
              { value: 'C', text: 'halves' },
              { value: 'D', text: 'stays the same' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. K ∝ v², so doubling v multiplies K by 2² = 4.',
            wrongFeedback:
              'Kinetic energy depends on v². Doubling v therefore multiplies K by four, not two.'
          },
          {
            id: 'w5-q3',
            question: 'The work-energy theorem states that the net work done on a body equals:',
            options: [
              { value: 'A', text: 'its weight' },
              { value: 'B', text: 'its change in kinetic energy' },
              { value: 'C', text: 'its momentum' },
              { value: 'D', text: 'its potential energy only' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. W_net = K_f − K_i.',
            wrongFeedback:
              'The theorem links net work to the change in kinetic energy, not to weight or momentum directly.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-6',
    number: 6,
    title: 'Forms of energy and transformations',
    objective:
      'Describe the main forms of energy, trace conversion chains in common devices, and explain dissipation and degraded energy.',
    blocks: [
      {
        type: 'p',
        text: 'Energy appears in many forms: sunlight, food, a moving ball, a charged battery, a hot stove, a loudspeaker and a nuclear reactor. In every working device one form changes into another. The total amount is conserved, but the usefulness of the energy can fall.'
      },
      { type: 'h3', text: 'The main forms' },
      {
        type: 'list',
        items: [
          'Solar energy: energy radiated by the Sun; the source of most energy on Earth.',
          'Heat energy: energy transferred because of a temperature difference; released on burning fuels.',
          'Light energy: the form that makes objects visible; the Sun is the natural source.',
          'Chemical energy: energy stored in fuels, food and cells, released in chemical reactions.',
          'Hydro energy: energy of stored or moving water, used in hydroelectric stations.',
          'Electrical energy: energy transferred by moving charges in a circuit.',
          'Nuclear energy: energy released when atomic nuclei split or join, with a loss of mass.',
          'Geothermal energy: heat from the Earth’s interior, carried by steam or hot water.',
          'Wind energy: energy of moving air, used to turn wind turbines.',
          'Sound energy: energy carried by vibrations through a medium.',
          'Magnetic energy: energy associated with magnets and magnetic fields.',
          'Mechanical energy: the sum of kinetic and potential energy of a body.'
        ]
      },
      {
        type: 'p',
        text: 'These forms are not separate kinds of stuff. They are different ways in which energy is stored or transferred. A battery stores chemical energy; when it drives a motor, the output is mechanical energy, and some input becomes heat in the wires.'
      },
      {
        type: 'visual',
        component: 'ConversionChainLab',
        id: 'wep-conversion-chain',
        title: 'Follow the energy through a device',
        caption:
          'Choose a device, predict the output form, then play the chain. The energy token moves through the real stages.',
        description:
          'A chain of labelled stages shows the input and output energy forms for a torch, motor, solar cell, loudspeaker, microphone and kettle. A token travels along the chain as the stages activate.',
        notice: [
          'The input form is not always the same as the output form.',
          'Some devices produce more than one useful output, such as light and heat from a torch.',
          'The chain shows transfer and conversion, not creation.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Everyday conversion chains' },
      {
        type: 'table',
        caption: 'Input, device and output',
        headers: ['Device', 'Input energy', 'Output energy'],
        rows: [
          ['Electric motor', 'Electrical', 'Mechanical'],
          ['Electric heater', 'Electrical', 'Heat'],
          ['Loudspeaker', 'Electrical', 'Sound'],
          ['Microphone', 'Sound', 'Electrical'],
          ['Solar cell', 'Light', 'Electrical'],
          ['Torch', 'Chemical (battery)', 'Light + heat'],
          ['Hydroelectric station', 'Gravitational potential of water', 'Electrical'],
          ['Steam engine', 'Chemical (fuel) → heat', 'Mechanical']
        ]
      },
      { type: 'h3', text: 'Dissipation and degraded energy' },
      {
        type: 'p',
        text: 'Not all the input energy becomes the form you want. Friction, air resistance and electrical resistance convert some energy into heat and sound, which spread into the surroundings. This spreading is called dissipation, and the less useful form is called degraded energy.'
      },
      {
        type: 'p',
        text: 'Dissipation does not destroy energy. The total energy of the universe is unchanged. What falls is the amount available for the intended purpose. A bouncing ball eventually stops because its mechanical energy has become heat and sound, not because the energy has vanished.'
      },
      {
        type: 'visual',
        component: 'DissipationVisual',
        id: 'wep-dissipation',
        title: 'Where the mechanical energy goes',
        caption:
          'Play the bounce. The mechanical-energy bar falls while the heat-and-sound bar rises; the total stays constant.',
        description:
          'A ball bounces lower on each impact. A bar chart shows mechanical energy decreasing and heat plus sound increasing by the same amount, with the total fixed at 100 units.',
        notice: [
          'The ball loses height because mechanical energy is transferred away.',
          'The lost mechanical energy appears as heat and sound.',
          'The total energy remains 100 units; only its usefulness has fallen.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Worked examples of conversion' },
      {
        type: 'steps',
        items: [
          'A torch battery powers a bulb.',
          'Chemical energy in the battery → electrical energy in the circuit → light and heat from the bulb.',
          'The light is the useful output; the heat is wasted for the purpose of seeing.'
        ]
      },
      {
        type: 'steps',
        items: [
          'A microphone is connected to a loudspeaker.',
          'Sound → electrical energy in the microphone → sound again from the loudspeaker.',
          'At each stage some energy becomes heat in the components, so the output is less than the input.'
        ]
      },
      { type: 'h3', text: 'Energy in the home and in nature' },
      {
        type: 'p',
        text: 'A home receives electrical energy and converts it into light, heat, sound and mechanical motion. A filament lamp produces light and a large amount of heat. An LED lamp produces more light for the same electrical input. A refrigerator uses electrical energy to move heat from inside to outside, so its useful effect is a transfer of heat rather than a rise in temperature of the room.'
      },
      {
        type: 'p',
        text: 'In nature, the Sun supplies light and heat. Green plants convert light energy into chemical energy during photosynthesis. Animals obtain chemical energy from food and convert it into mechanical energy and heat. Falling water in the water cycle has gravitational potential energy, which becomes kinetic energy and then electrical energy in a hydroelectric station.'
      },
      {
        type: 'table',
        caption: 'Energy chains worth remembering',
        headers: ['Source or device', 'Useful chain', 'Main wasted form'],
        rows: [
          ['Torch', 'Chemical → electrical → light', 'Heat'],
          ['Electric motor', 'Electrical → mechanical', 'Heat in windings and bearings'],
          ['Solar cell', 'Light → electrical', 'Heat'],
          ['Microphone and loudspeaker', 'Sound → electrical → sound', 'Heat in the electronics'],
          ['Hydroelectric station', 'Gravitational → kinetic → electrical', 'Heat and sound in the machinery'],
          ['Burning fuel', 'Chemical → heat and light', 'Unwanted heat and exhaust gases']
        ]
      },
      {
        type: 'p',
        text: 'A power station may report an output lower than its input because much of the energy is dissipated at each stage. The missing energy has not disappeared: it has spread into the surroundings at a temperature too low to be useful for the same purpose. This is why the idea of degraded energy matters in discussions of energy resources.'
      },
      {
        type: 'steps',
        items: [
          'A motor receives 500 J of electrical energy and delivers 350 J of mechanical energy.',
          'Useful output = 350 J.',
          'The remaining 150 J becomes heat and sound in the motor and surroundings.',
          'The total is still 500 J, but only 350 J is available as mechanical energy.'
        ]
      },
      {
        type: 'examtip',
        text: 'Write conversions as a chain with arrows: input → device → useful output (+ wasted forms). Never write “energy is used up”; write “energy is transferred” or “dissipated as heat and sound”.'
      },
      {
        type: 'misconception',
        text: 'A common mistake is to say that a machine “creates” energy or that friction “destroys” energy. Another is to list heat as a product without saying where it came from. Always account for the input and the useful output separately.'
      },
      {
        type: 'memory',
        technique: 'Acrostic sentence',
        title: 'Some Hot Lights Cook Healthy Eggs Near Green Wet Stones Making Music',
        aid: 'The twelve forms of energy named in this chapter.',
        mapping: [
          { cue: 'Some', target: 'Solar', meaning: 'Energy radiated by the Sun.' },
          { cue: 'Hot', target: 'Heat', meaning: 'Energy transferred by a temperature difference.' },
          { cue: 'Lights', target: 'Light', meaning: 'Energy that makes objects visible.' },
          { cue: 'Cook', target: 'Chemical', meaning: 'Energy stored in fuels, food and cells.' },
          { cue: 'Healthy', target: 'Hydro', meaning: 'Energy of stored or moving water.' },
          { cue: 'Eggs', target: 'Electrical', meaning: 'Energy transferred by moving charges.' },
          { cue: 'Near', target: 'Nuclear', meaning: 'Energy released from atomic nuclei.' },
          { cue: 'Green', target: 'Geothermal', meaning: 'Heat from the Earth’s interior.' },
          { cue: 'Wet', target: 'Wind', meaning: 'Energy of moving air.' },
          { cue: 'Stones', target: 'Sound', meaning: 'Energy carried by vibrations.' },
          { cue: 'Making', target: 'Magnetic', meaning: 'Energy associated with magnets and magnetic fields.' },
          { cue: 'Music', target: 'Mechanical', meaning: 'Kinetic plus potential energy of a body.' }
        ],
        recall:
          'Rebuild the twelve-form list from the sentence, then give one device that converts each of three chosen forms into another.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'w6-q1',
            question: 'A solar cell converts:',
            options: [
              { value: 'A', text: 'electrical energy to light energy' },
              { value: 'B', text: 'light energy to electrical energy' },
              { value: 'C', text: 'chemical energy to light energy' },
              { value: 'D', text: 'heat energy to sound energy' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. A solar cell takes light from the Sun and delivers electrical energy.',
            wrongFeedback:
              'The input to a solar cell is light; the output is electrical energy.'
          },
          {
            id: 'w6-q2',
            question: 'When a ball bounces lower and finally stops, its lost mechanical energy has mainly become:',
            options: [
              { value: 'A', text: 'mass' },
              { value: 'B', text: 'heat and sound' },
              { value: 'C', text: 'electrical energy' },
              { value: 'D', text: 'nothing, because energy is destroyed' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. Friction and impact convert mechanical energy into heat and sound.',
            wrongFeedback:
              'Energy is not destroyed. The mechanical energy is dissipated mainly as heat and sound.'
          },
          {
            id: 'w6-q3',
            question: '“Degraded energy” means energy that:',
            options: [
              { value: 'A', text: 'has been destroyed' },
              { value: 'B', text: 'is in a less useful form for the intended purpose' },
              { value: 'C', text: 'has become mass' },
              { value: 'D', text: 'is always electrical' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. It still exists, but it is less available for the job.',
            wrongFeedback:
              'Degraded energy is not destroyed; it is in a form that is less useful for the intended purpose.'
          }
        ]
      }
    ]
  },
  {
    id: 'lesson-7',
    number: 7,
    title: 'Conservation of energy',
    objective:
      'State the principle of conservation of energy, verify U + K = constant in free fall, and apply it to a simple pendulum.',
    blocks: [
      {
        type: 'p',
        text: 'A falling stone speeds up as it loses height. A pendulum slows at the ends of its swing and speeds up at the middle. In both cases one form of mechanical energy falls while the other rises. The total, when friction is negligible, stays the same.'
      },
      {
        type: 'definition',
        label: 'Principle of conservation of energy',
        text: 'Energy can neither be created nor destroyed. It only changes from one form to another. The total energy of an isolated system remains constant.'
      },
      {
        type: 'p',
        text: 'The principle applies to every conversion in the previous lesson. In mechanics, if only conservative forces such as gravity act, the sum of kinetic and potential energy is constant.'
      },
      {
        type: 'formula',
        text: 'Without friction or air resistance:  U + K = constant'
      },
      { type: 'h3', text: 'Free fall: checking the total' },
      {
        type: 'p',
        text: 'Let a body of mass m fall from rest at height h above the ground. At the top, U = mgh and K = 0. After falling a distance x, its height is h − x, so U = mg(h − x). Its speed v satisfies v² = 2gx, so K = ½mv² = mgx. The total is mg(h − x) + mgx = mgh.'
      },
      {
        type: 'p',
        text: 'At the ground, h = 0 and U = 0. The speed satisfies v² = 2gh, so K = ½m(2gh) = mgh. The total is still mgh. The potential energy has become kinetic energy, but the sum has not changed.'
      },
      {
        type: 'visual',
        component: 'FreeFallLab',
        id: 'wep-freefall',
        title: 'U and K in free fall',
        caption:
          'Step the fall and watch U fall while K rises. The total bar stays at the same value.',
        description:
          'A ball falls from a chosen height. Bars and numbers show potential energy, kinetic energy and their constant total at the top, at half height and at the ground.',
        notice: [
          'At the top, U = mgh and K = 0.',
          'At half height, U = K = mgh/2.',
          'At the ground, U = 0 and K = mgh.'
        ],
        props: {}
      },
      {
        type: 'visual',
        component: 'EnergyGraphVisual',
        id: 'wep-energy-graph',
        title: 'The energy–height graph',
        caption:
          'Read U, K and total at the top, halfway down and at the ground. The total line is horizontal.',
        description:
          'A graph of energy against height. U falls from mgh to zero, K rises from zero to mgh, and the total energy stays horizontal at mgh. The U and K lines cross at h/2.',
        notice: [
          'The total-energy line does not change with height.',
          'The U and K lines cross at half the height.',
          'The sum of the two sloping lines always equals the total line.'
        ],
        props: {}
      },
      { type: 'h3', text: 'Worked example: speed on impact' },
      {
        type: 'steps',
        items: [
          'A ball is dropped from rest at 20 m. Take g = 10 m s⁻² and ignore air resistance.',
          'At the top: U = mgh, K = 0, total = mgh.',
          'Just before impact: U = 0, so K = mgh.',
          '½mv² = mgh, so v² = 2gh = 2 × 10 × 20 = 400.',
          'v = 20 m s⁻¹. The mass cancels, so the result is independent of mass.'
        ]
      },
      { type: 'h3', text: 'The simple pendulum' },
      {
        type: 'p',
        text: 'A simple pendulum is a small heavy bob suspended from a fixed support by a thread. When displaced to one side and released, it swings through a mean position. At the extreme positions the bob is momentarily at rest at height h, so U is maximum and K is zero. At the mean position the height is zero, so U is zero and K is maximum.'
      },
      {
        type: 'p',
        text: 'In an ideal pendulum with no friction or air resistance, the total U + K stays constant. The bob rises to the same height on the other side. A real pendulum gradually stops because friction at the support and air resistance dissipate mechanical energy as heat.'
      },
      {
        type: 'visual',
        component: 'PendulumVisual',
        id: 'wep-pendulum',
        title: 'Energy through one pendulum swing',
        caption:
          'Play the swing and watch U and K exchange. Predict where the bob moves fastest.',
        description:
          'A pendulum bob swings between two extremes. Bars show potential energy and kinetic energy, with a constant total. The bob is highest and slowest at the extremes, and lowest and fastest at the mean position.',
        notice: [
          'At an extreme, U is maximum and K is zero.',
          'At the mean position, K is maximum and U is zero.',
          'At intermediate points, the bob has both forms, but their sum stays constant.'
        ],
        props: {}
      },
      {
        type: 'steps',
        items: [
          'A pendulum bob of mass 500 g rises 5.0 cm above its mean position. Take g = 10 m s⁻².',
          'Total mechanical energy = mgh = 0.50 × 10 × 0.05 = 0.25 J.',
          'At the mean position, K = 0.25 J.',
          '½mv² = 0.25, so v² = (2 × 0.25)/0.50 = 1.0 and v = 1.0 m s⁻¹.',
          'This assumes no energy is lost to air resistance or friction.'
        ]
      },
      { type: 'h3', text: 'Reading conservation questions' },
      {
        type: 'p',
        text: 'Most conservation questions give two positions and ask for a speed or a height. The method is always the same. Choose a zero level, write the total mechanical energy at the first position, write it at the second position, and set the two totals equal. If the body starts from rest, K₁ is zero. If it reaches the highest point of a swing or a throw, K₂ is zero at that instant. Then solve for the unknown.'
      },
      {
        type: 'steps',
        items: [
          'A ball is thrown vertically upward at 15 m s⁻¹. Find its maximum height. Take g = 10 m s⁻² and ignore air resistance.',
          'At the ground: U₁ = 0 and K₁ = ½mv².',
          'At the top: K₂ = 0 and U₂ = mgh.',
          'Equate: ½mv² = mgh, so h = v²/(2g) = 225/20 = 11.25 m.',
          'The mass cancels. The answer depends on the launch speed and g, not on the mass.'
        ]
      },
      {
        type: 'p',
        text: 'The same method handles a fall. If a body is released from rest at height h, the total is mgh. At any lower height y, the remaining potential energy is mgy and the kinetic energy is the difference mgh − mgy. At the ground, all of the initial potential energy has become kinetic energy. The speed is √(2gh), provided no energy is lost to friction or air resistance.'
      },
      {
        type: 'p',
        text: 'Watch the wording of the zero level. If the ground is zero, a point below the starting height would have negative potential energy. That is allowed: potential energy is relative. A negative value simply means the body is below the chosen reference level. The change in potential energy between two positions is what enters the conservation equation, so the same physical result is obtained from any consistent zero level.'
      },
      { type: 'h3', text: 'When friction cannot be ignored' },
      {
        type: 'p',
        text: 'In a real system, friction and air resistance convert some mechanical energy into heat and sound. The total energy of the system and surroundings is still conserved, but the mechanical energy alone falls. This is why a real pendulum eventually stops and why a bouncing ball does not return to its original height.'
      },
      {
        type: 'visual',
        component: 'FrictionLossToggle',
        id: 'wep-friction-loss',
        title: 'Ideal and real energy accounts',
        caption:
          'Switch between the ideal and real cases. The total stays 100 units, but the mechanical share falls when friction acts.',
        description:
          'Two energy accounts compare an ideal system with no friction and a real system with friction and air resistance. In the real case mechanical energy falls and heat plus sound rises.',
        notice: [
          'The ideal total mechanical energy stays at 100 units.',
          'In the real case, mechanical energy falls to 70 units and heat plus sound rises to 30 units.',
          'The overall total is still 100 units; the energy is degraded, not destroyed.'
        ],
        props: {}
      },
      {
        type: 'table',
        caption: 'Free-fall energy at three positions',
        headers: ['Position', 'Height above ground', 'Potential energy U', 'Kinetic energy K', 'U + K'],
        rows: [
          ['Top, released from rest', 'h', 'mgh', '0', 'mgh'],
          ['After falling distance x', 'h − x', 'mg(h − x)', 'mgx', 'mgh'],
          ['Just before impact', '0', '0', 'mgh', 'mgh']
        ]
      },
      {
        type: 'p',
        text: 'The table is a compact proof. At every row, the two energies change, but their sum is the same. The speed at the ground is obtained from ½mv² = mgh, which gives v = √(2gh). The mass cancels, so a heavy ball and a light ball released together would reach the ground with the same speed if air resistance were absent. In practice, air resistance makes the lighter or larger ball land later.'
      },
      { type: 'h3', text: 'Checking the pendulum calculation' },
      {
        type: 'steps',
        items: [
          'A pendulum bob of mass 0.10 kg is released from rest 0.20 m above its mean position. Take g = 10 m s⁻².',
          'Total mechanical energy at the release point: U = mgh = 0.10 × 10 × 0.20 = 0.20 J; K = 0.',
          'At the mean position, U = 0, so K = 0.20 J.',
          '½mv² = 0.20 gives v² = (2 × 0.20)/0.10 = 4.0 and v = 2.0 m s⁻¹.',
          'The calculation assumes no friction at the support and no air resistance.'
        ]
      },
      {
        type: 'p',
        text: 'The bob rises to the same height on the opposite side in the ideal case because the kinetic energy at the mean position is converted back into the same amount of potential energy. If the bob is released from a greater height, it has more total energy, swings faster at the bottom, and rises higher on the other side. The period of the swing is not required here; this chapter treats the pendulum only as an energy example.'
      },
      {
        type: 'p',
        text: 'When friction is present, the mechanical account loses energy at every stage. The total energy account still balances if heat and sound are included. A common exam instruction is to “state the assumption made”; the expected answer is usually that friction and air resistance are negligible, or that the pendulum is ideal.'
      },
      {
        type: 'examtip',
        text: 'State the zero level before writing U = mgh. For conservation problems, compare two positions and write U₁ + K₁ = U₂ + K₂. State the assumption that friction and air resistance are negligible.'
      },
      {
        type: 'misconception',
        text: 'Do not say that a pendulum stops because its energy has been used up. Its mechanical energy has been dissipated, but the total energy remains. Also, do not assume the bob has no energy at the extreme: it has maximum potential energy there.'
      },
      {
        type: 'memory',
        technique: 'Cause-and-effect chain',
        title: 'Stored falls, motion rises, total holds',
        aid: 'In free fall and in an ideal pendulum, U and K exchange but their total stays constant.',
        mapping: [
          {
            cue: 'Stored falls',
            target: 'Potential energy decreases',
            meaning: 'The body loses height, so mgh falls.'
          },
          {
            cue: 'Motion rises',
            target: 'Kinetic energy increases',
            meaning: 'The body speeds up, so ½mv² rises.'
          },
          {
            cue: 'Total holds',
            target: 'U + K stays constant',
            meaning: 'Without friction, the two changes cancel exactly.'
          }
        ],
        recall:
          'A 0.20 kg ball is dropped from 5.0 m. Find its speed just before impact and state the assumption used.'
      },
      {
        type: 'quickchecks',
        items: [
          {
            id: 'w7-q1',
            question: 'For a freely falling body with air resistance neglected, which quantity stays constant?',
            options: [
              { value: 'A', text: 'Potential energy only' },
              { value: 'B', text: 'Kinetic energy only' },
              { value: 'C', text: 'The sum of potential and kinetic energy' },
              { value: 'D', text: 'The speed' }
            ],
            correctValue: 'C',
            correctFeedback:
              'Correct. U falls and K rises by the same amount, so U + K is constant.',
            wrongFeedback:
              'The individual energies change, but their total remains constant when only gravity does work.'
          },
          {
            id: 'w7-q2',
            question: 'At the mean position of an ideal simple pendulum, the bob has:',
            options: [
              { value: 'A', text: 'maximum potential energy and zero kinetic energy' },
              { value: 'B', text: 'maximum kinetic energy and minimum potential energy' },
              { value: 'C', text: 'equal potential and kinetic energy' },
              { value: 'D', text: 'zero total energy' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. The bob is lowest and fastest at the mean position, so K is maximum and U is minimum.',
            wrongFeedback:
              'The mean position is the lowest point of the swing, where the bob moves fastest.'
          },
          {
            id: 'w7-q3',
            question: 'A ball is dropped from 5 m. Taking g = 10 m s⁻² and ignoring air resistance, its speed just before impact is:',
            options: [
              { value: 'A', text: '5 m s⁻¹' },
              { value: 'B', text: '10 m s⁻¹' },
              { value: 'C', text: '25 m s⁻¹' },
              { value: 'D', text: '50 m s⁻¹' }
            ],
            correctValue: 'B',
            correctFeedback:
              'Correct. v² = 2gh = 2 × 10 × 5 = 100, so v = 10 m s⁻¹.',
            wrongFeedback:
              'Equate mgh to ½mv². The mass cancels, giving v² = 2gh.'
          }
        ]
      }
    ]
  }
]

export const flashcards = [
  {
    id: 'w-fc1',
    question: 'When is work done in physics?',
    answer:
      'When a force acts on a body and the point of application has a displacement in the direction of the force.'
  },
  {
    id: 'w-fc2',
    question: 'State the general formula for work.',
    answer: 'W = Fs cos θ, where θ is the angle between the force and the displacement.'
  },
  {
    id: 'w-fc3',
    question: 'When is work zero?',
    answer:
      'When there is no displacement, or when the force is perpendicular to the displacement (θ = 90°).'
  },
  {
    id: 'w-fc4',
    question: 'What does negative work mean?',
    answer:
      'The force has a component opposite to the displacement, so it removes mechanical energy from the body; friction is the usual example.'
  },
  {
    id: 'w-fc5',
    question: 'Write the work done by gravity when a body falls through height h.',
    answer: 'W = mgh, positive because gravity and the displacement are both downward.'
  },
  {
    id: 'w-fc6',
    question: 'How many ergs are in one joule?',
    answer: '1 J = 10⁷ erg.'
  },
  {
    id: 'w-fc7',
    question: 'Define power and give its SI unit.',
    answer: 'Power is the rate of doing work, P = W/t; its SI unit is the watt.'
  },
  {
    id: 'w-fc8',
    question: 'Write power in terms of force and speed.',
    answer: 'P = Fv for a constant force at steady speed.'
  },
  {
    id: 'w-fc9',
    question: 'How many watts are in one horsepower?',
    answer: '1 HP = 746 W.'
  },
  {
    id: 'w-fc10',
    question: 'Define energy.',
    answer: 'The energy of a body is its capacity to do work; it is a scalar measured in joules.'
  },
  {
    id: 'w-fc11',
    question: 'How many joules are in one kilowatt-hour?',
    answer: '1 kWh = 3.6 × 10⁶ J = 3.6 MJ.'
  },
  {
    id: 'w-fc12',
    question: 'How many joules are in one calorie?',
    answer: '1 cal = 4.18 J; 1 kcal = 4180 J.'
  },
  {
    id: 'w-fc13',
    question: 'How many joules are in one electron volt?',
    answer: '1 eV = 1.6 × 10⁻¹⁹ J.'
  },
  {
    id: 'w-fc14',
    question: 'Define potential energy and give the formula for gravitational potential energy near Earth.',
    answer: 'Energy due to position or configuration; U = mgh for a height h above the chosen zero level.'
  },
  {
    id: 'w-fc15',
    question: 'Define kinetic energy and give its formula.',
    answer: 'Energy due to motion; K = ½mv².'
  },
  {
    id: 'w-fc16',
    question: 'State the work-energy theorem.',
    answer: 'The net work done on a body equals its change in kinetic energy: W_net = K_f − K_i.'
  },
  {
    id: 'w-fc17',
    question: 'Relate kinetic energy and momentum.',
    answer: 'K = p²/(2m), or p = √(2mK).'
  },
  {
    id: 'w-fc18',
    question: 'Name the three forms of kinetic energy.',
    answer: 'Translational, rotational and vibrational.'
  },
  {
    id: 'w-fc19',
    question: 'State the principle of conservation of energy.',
    answer:
      'Energy can neither be created nor destroyed; it only changes from one form to another, and the total energy of an isolated system remains constant.'
  },
  {
    id: 'w-fc20',
    question: 'What is meant by dissipation of energy?',
    answer:
      'The spreading of energy into less useful forms, usually heat and sound, and transfer to the surroundings.'
  },
  {
    id: 'w-fc21',
    question: 'At which point of a simple pendulum is the kinetic energy greatest?',
    answer: 'At the mean position, where the potential energy is least.'
  },
  {
    id: 'w-fc22',
    question: 'Why does a real pendulum eventually stop?',
    answer:
      'Friction and air resistance dissipate its mechanical energy as heat and sound, although the total energy is conserved.'
  }
]

export const memoryWorkshop = {
  title: 'Build the work–energy account',
  objective:
    'Organise the chapter as an energy account: work transfers energy, power sets the rate, and U and K exchange while the total is conserved unless friction dissipates energy.',
  intro: [
    'The chapter has one central accounting idea. Work is a transfer of energy; power is how fast the transfer happens. Potential and kinetic energy are two stored or active forms, and their sum is conserved in ideal mechanical systems.',
    'Say the condition with every formula. W = Fs cos θ needs an angle. P = W/t needs a time. U = mgh needs a zero level. K = ½mv² needs translational motion. Conservation needs friction to be negligible.'
  ],
  sections: [
    {
      title: 'The chapter in one table',
      note: 'Every row answers: what is measured, and what condition must be stated?',
      headers: ['Quantity', 'Formula', 'Condition or unit'],
      rows: [
        ['Work', 'W = Fs cos θ', 'Angle between force and displacement; joule'],
        ['Work by gravity', 'W = mgh', 'Vertical height; sign depends on rise or fall'],
        ['Power', 'P = W/t = Fv', 'Rate of transfer; watt'],
        ['Potential energy', 'U = mgh', 'Stated zero level; joule'],
        ['Kinetic energy', 'K = ½mv²', 'Translational motion; joule'],
        ['Conservation', 'U + K = constant', 'No friction or air resistance']
      ]
    },
    {
      title: 'Work, energy and power',
      note: 'These three are related but not interchangeable.',
      headers: ['Idea', 'What it tells you', 'Do not confuse it with'],
      rows: [
        ['Work', 'Energy transferred by a force over a displacement', 'Effort or force alone'],
        ['Energy', 'The amount stored or transferred', 'The rate of transfer'],
        ['Power', 'The rate of transfer', 'The total amount transferred']
      ]
    },
    {
      title: 'Units to keep straight',
      note: 'A time factor turns power into energy.',
      headers: ['Unit', 'Measures', 'Key conversion'],
      rows: [
        ['joule', 'Work or energy', '1 J = 10⁷ erg'],
        ['watt', 'Power', '1 W = 1 J s⁻¹'],
        ['watt-hour', 'Energy', '1 Wh = 3600 J'],
        ['kilowatt-hour', 'Energy', '1 kWh = 3.6 × 10⁶ J'],
        ['calorie', 'Heat energy', '1 cal = 4.18 J'],
        ['electron volt', 'Particle energy', '1 eV = 1.6 × 10⁻¹⁹ J']
      ]
    },
    {
      title: 'Ideal and real systems',
      note: 'The total is always conserved; the mechanical share is not always conserved.',
      headers: ['System', 'Mechanical energy', 'What happens to the rest?'],
      rows: [
        ['Free fall, no air resistance', 'Constant U + K', 'No loss'],
        ['Ideal pendulum', 'Constant U + K', 'No loss'],
        ['Real pendulum', 'Falls over time', 'Heat and sound in the surroundings'],
        ['Bouncing ball', 'Falls at each bounce', 'Heat and sound at each impact']
      ]
    }
  ],
  recall:
    'Cover the tables. Rebuild the work–energy account, then explain why a kWh is energy while a kW is power.',
  flashcards
}

export const revision = {
  rapidSheet: [
    'Work is done only when a force produces a displacement in its own direction; W = Fs cos θ.',
    'At θ = 0° work is positive and maximum; at 90° it is zero; at 180° it is negative.',
    'The work done by gravity is W = mgh, using the vertical height; the path does not matter.',
    '1 J = 1 N m = 10⁷ erg; 1 kWh = 3.6 × 10⁶ J; 1 cal = 4.18 J; 1 eV = 1.6 × 10⁻¹⁹ J.',
    'Power is the rate of doing work: P = W/t = Fv; SI unit watt.',
    '1 HP = 746 W; 1 kW = 10³ W; 1 MW = 10⁶ W; 1 GW = 10⁹ W.',
    'Energy is the capacity to do work; it is a scalar and is measured in joules.',
    'U = mgh is gravitational potential energy relative to a chosen zero level.',
    'K = ½mv²; doubling the speed multiplies kinetic energy by four.',
    'The work-energy theorem: net work = change in kinetic energy.',
    'For an ideal mechanical system, U + K is constant; with friction, mechanical energy is dissipated as heat and sound.',
    'At the mean position of a pendulum, K is maximum and U is minimum; at an extreme, U is maximum and K is zero.'
  ],
  definitions: [
    {
      term: 'Work',
      meaning:
        'The product of force and the displacement of its point of application in the direction of the force: W = Fs cos θ.'
    },
    {
      term: 'Power',
      meaning: 'The rate of doing work: P = W/t; SI unit watt.'
    },
    {
      term: 'Energy',
      meaning: 'The capacity of a body to do work; a scalar measured in joules.'
    },
    {
      term: 'Potential energy',
      meaning:
        'Energy possessed by a body by virtue of its changed position or configuration; near Earth, U = mgh.'
    },
    {
      term: 'Kinetic energy',
      meaning: 'Energy possessed by a body by virtue of its motion; K = ½mv² for translational motion.'
    },
    {
      term: 'Work-energy theorem',
      meaning: 'The net work done on a body equals the change in its kinetic energy.'
    },
    {
      term: 'Principle of conservation of energy',
      meaning:
        'Energy can neither be created nor destroyed; it only changes form, and the total energy of an isolated system remains constant.'
    },
    {
      term: 'Dissipation',
      meaning:
        'The conversion and spreading of energy into less useful forms, usually heat and sound, into the surroundings.'
    },
    {
      term: 'Degraded energy',
      meaning: 'Energy in a less useful form, no longer available for the intended purpose.'
    }
  ],
  comparisons: [
    {
      pair: 'Work vs power',
      difference:
        'Work is the amount of energy transferred by a force over a displacement; power is the rate at which that transfer happens.'
    },
    {
      pair: 'Energy vs power',
      difference:
        'Energy is the amount stored or transferred; power is the rate of transfer. A kWh is energy; a kW is power.'
    },
    {
      pair: 'Potential vs kinetic energy',
      difference:
        'Potential energy depends on position or configuration; kinetic energy depends on motion and on the square of speed.'
    },
    {
      pair: 'Mass vs weight',
      difference:
        'Mass is the amount of matter in kilograms; weight is the gravitational force mg in newtons.'
    },
    {
      pair: 'Ideal vs real conservation',
      difference:
        'In an ideal system U + K is constant; in a real system mechanical energy falls as heat and sound are produced, although total energy is conserved.'
    },
    {
      pair: 'Watt vs watt-hour',
      difference: 'The watt is a unit of power; the watt-hour is a unit of energy equal to 3600 J.'
    },
    {
      pair: 'Momentum vs kinetic energy',
      difference:
        'Momentum p = mv is a vector; kinetic energy K = ½mv² is a scalar. Doubling v doubles p but quadruples K.'
    }
  ],
  memoryAids: [
    'Along counts, across cancels: only F cos θ does work.',
    'Height hides the path: W = mgh uses the vertical height, not the route.',
    'Rate races, amount rests: power is the rate; work and energy are the amounts.',
    'Every Joule Can Walk Kilometres: eV, J, cal, Wh, kWh.',
    'Height holds, speed squares: U = mgh and K = ½mv².',
    'Some Hot Lights Cook Healthy Eggs Near Green Wet Stones Making Music: the twelve energy forms.',
    'Stored falls, motion rises, total holds: conservation in free fall and the pendulum.'
  ],
  mistakes: [
    'Using the distance along a slope instead of the vertical height in W = mgh.',
    'Forgetting that work is zero when the force is perpendicular to the displacement.',
    'Treating a kilowatt-hour as a unit of power because it contains the word watt.',
    'Adding a time factor to power but forgetting to convert minutes or hours to seconds.',
    'Using the total distance instead of the displacement in W = Fs cos θ.',
    'Squaring the speed after doubling it but forgetting that K depends on v², not v.',
    'Assuming potential energy has an absolute value without stating the zero level.',
    'Saying that friction destroys energy instead of dissipating mechanical energy as heat and sound.',
    'Calling the watt-hour a unit of power; it is a unit of energy.'
  ],
  reviewQuestions: [
    'A force of 30 N moves a body 4.0 m at 60° to the displacement. Calculate the work done.',
    'A 5 kg box is lifted 2.5 m. Calculate the work done against gravity.',
    'Explain why carrying a load horizontally does no work against gravity.',
    'Convert 3 kWh to joules and 5000 J to kilojoules.',
    'A machine does 7200 J of work in 1.5 minutes. Calculate its power in watts and kilowatts.',
    'A car exerts a force of 600 N at a steady 12 m s⁻¹. Calculate the power developed.',
    'A 3 kg body is raised 4 m. Find its gravitational potential energy and its speed if it falls from rest.',
    'A 1200 kg car moves at 15 m s⁻¹. Calculate its kinetic energy.',
    'State the work-energy theorem and use it to explain why doubling the net force over the same distance doubles the change in kinetic energy.',
    'Describe two energy conversions in a torch and state the useful output.',
    'Explain the difference between dissipated energy and destroyed energy.',
    'Verify that U + K is constant for a body falling freely from height h.',
    'A pendulum bob rises 8 cm above its mean position. Find its speed at the mean position, stating the assumption used.'
  ]
}
