# MARLEY react file instructions for ve scattering

## 1.) Finding B(GT-) data

- Using ensdf: Type in the product nucleus, and look for (p,n) or (3He,t) channels. Within that, look for high energy p,n scattering (E>\~50 MeV) or 33He,t scattering (typically E=420 MeV or E=450 MeV, but really anything above \~150 Me. Sometimes this is given in E/A or E/nucleon in which case you’re looking for E/A or E/nucleon > \~50 MeV)

- For theory calculations: Search something like “Gamow-Teller strengths [parent nucleus] [product nucleus]

## 2.) Formatting B(GT-) data

- Energies:
  - i. In most cases, energies correspond to excited states of the product nucleus. For GT transitions, the parity should be the same between the ground state of the parent nucleus and the excited state of the product nucleus, and the spin should differ by +- 1.
  - ii. In some cases, the energy is given relative to the ground state of the parent nucleus, in which case energies given are the Q-value of the transition + the excitation energy in the product nucleus. This is usually mentioned in the text, and you can just subtract off the Q-value.
  - iii. You can also check in ENSDF that at low energies, the energies given approximately correspond to excited states with the correct spin parity.
  - iv. At higher energies (typically above the particle emission threshold), Gamow-Teller strength is usually given per MeV bin. You can just use the center of those bins as the energy in the MARLEY react file
  - v. You can potentially correct the energy levels to match those listed in ENSDF, but MARLEY looks for the closest one and typically finds the right one.

- Strengths:
  - i. For (p,n) and (3He,t) scattering, the GT strength usually reported is the strong B(GT) strength. This needs to be multiplied by gA=1.26^2 to form the weak matrix element. We use gA=1.26 since that corresponds to the value used in the original normalization paper ([https://www.sciencedirect.com/science/article/pii/0375947487900893](https://www.sciencedirect.com/science/article/pii/0375947487900893))
    1. Sometimes the normalization comes from beta decay strengths, particularly for mirror nuclei (Z  N in the transition), in which case they may already include gA, but this is rare)
  - ii. If you are deriving strengths from a histogram, you should check the total strength matches that reported in the paper (prior to multiplying by gA^2=1.26^2)

## 3.) Finding B(F) data

- B(F) strength is usually assumed to be located at the Isobaric Analog State (IAS) with a strength of B(F) = N_parent – Z_parent.

- The energy of the IAS is typically determined in (p,n) or (3He,t) scattering measurements, there are also approximations for calculating it if needed.

- For non-even-even nuclei, this approximation is not as good, but we don’t currently have a better way of handling this

## 4.) Generating the react file

- The format for the react file is three numbers separated by spaces
  - i. Excitation energy in product nucleus (MeV)
  - ii. Weak B(GT) or B(F) strength
  - iii. 1for B(GT), or 0 for B(F)

- The energies must be increasing sequentially
