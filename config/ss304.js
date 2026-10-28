{
  direction: { x: 0.0, y: 0.0, z: 1.0 },

  target: {
    nuclides: [ 1000260560, 1000280580, 1000240520 ],
    atom_fractions: [ 0.7, 0.1, 0.2],
  },

  reactions: [ "ve56FeCC_Paar2015.react","ve58NiCC_Fujita2002Rapaport1983.react","ve52Cr.react" ],

  source: {
    type: "dar",
    neutrino: "ve",
  },    
  
  events: 100,

  output: [ { file: "events.ascii", format: "ascii", mode: "overwrite" } ],
  },
}
