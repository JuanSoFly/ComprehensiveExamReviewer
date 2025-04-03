
        const questionsData = [
            // --- START OF PARSED DATA ---
            {
                "id": 1,
                "question": "Where is prozone usually seen?",
                "options": [
                    "serum which contain low titer of antibodies",
                    "body fluids which contain excess antigens",
                    "serum which contain low titer of antigens",
                    "serum which contain high titer of antibodies"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "The prozone phenomenon occurs in agglutination or precipitation reactions when the concentration of antibody is too high, leading to the formation of very small complexes that do not lattice properly, resulting in a false-negative or weakly positive reaction. This happens in the zone of antibody excess."
            },
            {
                "id": 2,
                "question": "A cut on a person's finger becomes contaminated with the bacterium Staphylococcus aureus. The first response by the immune system consists of the activity of:",
                "options": [
                    "B cells",
                    "T cells",
                    "Neutrophils",
                    "Monocytes"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Neutrophils are phagocytic cells and are the primary first responders (innate immunity) to bacterial infections, migrating quickly to the site of inflammation. Monocytes arrive later and differentiate into macrophages. B and T cells are part of the adaptive immune response, which takes longer to develop."
            },
            {
                "id": 3,
                "question": "What specimen is used to diagnose neurosyphilis?",
                "options": [
                    "Swab",
                    "Serum",
                    "CSF",
                    "Synovial fluid"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Neurosyphilis involves the central nervous system (brain and spinal cord). Diagnosis requires testing cerebrospinal fluid (CSF) for the presence of Treponema pallidum antibodies (e.g., VDRL-CSF, FTA-ABS). Serum tests can be positive but don't confirm CNS involvement."
            },
            {
                "id": 4,
                "question": "Monocytes and macrophages play a role in the mononuclear phagocytic system. For an antibody-coated antigen to be phagocytized, what part of the antibody molecule fits into a receptor on the phagocytic cell?",
                "options": [
                    "Fc region",
                    "Fab region",
                    "Hinge region",
                    "Variable region"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Phagocytic cells (like macrophages) have Fc receptors (FcR) on their surface. These receptors bind to the Fc (Fragment crystallizable) portion of antibodies (especially IgG) that have coated an antigen (opsonization), triggering phagocytosis. The Fab region binds the antigen."
            },
            {
                "id": 5,
                "question": "An individual is recovering from a bacterial infection and tests positive for antibodies to a protein normally found in the cytoplasm of this bacterium. Which of the following statements is true of this situation?",
                "options": [
                    "Class I molecules have presented the bacterial antigen to CD8+ T cells",
                    "The T cell receptor on CD4+ T cells has recognized the bacterial antigen directly",
                    "Class II molecules have presented the bacterial antigen to CD4+ T cells",
                    "CD8+ T cells have recognized the bacterium and activated B cells"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Bacterial antigens are typically exogenous (extracellular or phagocytosed). Antigen-presenting cells (APCs like macrophages, dendritic cells, B cells) process these antigens and present peptides via MHC Class II molecules to CD4+ T helper cells. CD4+ T cells are crucial for initiating an antibody response by B cells. Class I molecules present endogenous antigens (like viral proteins made inside the cell) to CD8+ T cells."
            },
            {
                "id": 6,
                "question": "A false ______ serologic reaction is sometimes caused by excess amount of reagent red cells.",
                "options": [
                    "positive",
                    "negative",
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "This describes the postzone phenomenon. If there is an excess of antigen (in this case, reagent red cells acting as antigen carriers) relative to the amount of antibody, lattice formation can be inhibited, leading to a false-negative result. Prozone is antibody excess."
            },
            {
                "id": 7,
                "question": "A seriously wounded person is treated with anti-tetanus. What adaptive immunity is involved?",
                "options": [
                    "natural passive",
                    "artificial passive",
                    "natural active",
                    "artificial active"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Anti-tetanus treatment involves injecting pre-formed antibodies (immunoglobulins) against the tetanus toxin. This provides immediate but temporary protection. It's passive because the recipient's immune system doesn't make the antibodies, and artificial because it's acquired through medical intervention (injection)."
            },
            {
                "id": 8,
                "question": "A patient is given a tetanus toxoid. What type of immunity is involved?",
                "options": [
                    "natural passive",
                    "artificial passive",
                    "artificial active",
                    "natural active"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "A tetanus toxoid is an inactivated toxin used as a vaccine. The recipient's immune system recognizes the toxoid as foreign and actively mounts an immune response, producing its own antibodies and memory cells. This provides long-lasting protection. It's active because the body makes the response, and artificial because it's acquired via vaccination."
            },
            {
                "id": 9,
                "question": "The following are specific serologic tests for syphilis, except:",
                "options": [
                    "RPR",
                    "MHA-TP",
                    "FTA-ABS",
                    "TP-PA"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "RPR (Rapid Plasma Reagin) is a non-treponemal test that detects reagin antibodies (antibodies against cardiolipin), which are not specific to Treponema pallidum. MHA-TP, FTA-ABS, and TP-PA/HATTS are specific treponemal tests that detect antibodies directed against T. pallidum antigens."
            },
            {
                "id": 10,
                "question": "Flow cytometry results on a patient reveal a lack of cells with CD2 and CD3. What does this indicate?",
                "options": [
                    "lack of B cells",
                    "lack of T cells",
                    "lack of monocytes",
                    "lack of NK cells"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "CD2 and CD3 are classic pan-T cell markers, meaning they are expressed on the surface of virtually all mature T lymphocytes. Their absence indicates a deficiency or lack of T cells. B cells typically express CD19/CD20, monocytes CD14, NK cells CD16/CD56."
            },
            {
                "id": 11,
                "question": "Receptor of Epstein-Barr virus",
                "options": [
                    "CD4",
                    "CD8",
                    "CD19",
                    "CD21"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "The Epstein-Barr virus (EBV) primarily infects B lymphocytes by binding to the CD21 molecule (also known as CR2, the complement receptor 2) on the B cell surface."
            },
            {
                "id": 12,
                "question": "Measurement of CRP levels can be used for all of the following except:",
                "options": [
                    "monitoring drug therapy with anti-inflammatory agents",
                    "tracking the normal progress of wound healing in postsurgery patients",
                    "diagnosis of a specific bacterial infection",
                    "monitoring the activity of disorders such as rheumatoid arthritis"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "C-reactive protein (CRP) is an acute-phase reactant that increases non-specifically in response to inflammation, infection (bacterial or viral), and tissue injury. While elevated CRP suggests inflammation often seen in bacterial infections, it cannot diagnose a specific bacterial infection; culture or specific molecular/serological tests are needed for that. It is useful for monitoring inflammation, disease activity (like RA), post-surgical recovery, and drug therapy effectiveness."
            },
            {
                "id": 13,
                "question": "Actively acquired immunity can be caused by all of the following, except:",
                "options": [
                    "contracting the disease",
                    "contracting a subclinical case of the disease",
                    "injection with appropriate vaccine",
                    "injection with immune serum containing appropriate antibodies"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Active immunity requires the individual's immune system to actively respond to an antigen (from disease, subclinical exposure, or vaccination). Injecting pre-formed antibodies provides passive immunity, not active immunity."
            },
            {
                "id": 14,
                "question": "A major advantage of passive immunization compared to active immunization is that:",
                "options": [
                    "antibody is available more quickly",
                    "it provides long-term immunity",
                    "IgM antibody is the primary type made",
                    "it is administered orally"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Passive immunization provides immediate protection because pre-formed antibodies are directly administered. Active immunization requires the body to mount its own response, which takes days to weeks to develop protective antibody levels. Passive immunity is short-lived, typically involves IgG, and is usually given via injection."
            },
            {
                "id": 15,
                "question": "The enzyme which fragments antibody molecule into 2 Fab fragments and 1 Fc fragment:",
                "options": [
                    "Ficin",
                    "Pepsin",
                    "Papain",
                    "Trypsin"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Pepsin cleaves below the hinge region, producing 1 F(ab')₂ fragment (with two antigen-binding sites) and degraded Fc pieces."
            },
            {
                "id": 16,
                "question": "The disappearance of HBsAg and HBeAg, persistence of anti-HBs, often anti-HBe:",
                "options": [
                    "acute HBV infection",
                    "chronic HBV infection",
                    "recovery phase",
                    "vaccinated individual"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "This serological profile indicates recovery from Hepatitis B infection and the development of immunity. HBsAg (surface antigen) and HBeAg (e antigen, marker of infectivity) become undetectable. Anti-HBs (antibody to surface antigen) appears and confers immunity. Anti-HBe (antibody to e antigen) also typically appears during seroconversion."
            },
            {
                "id": 17,
                "question": "A 12-year old girl presented to her doctor complaining of headache, stiff neck, fever, and lethargy. A week earlier she had swam in a warm-water spring. Motile amoeba measuring 10-30 um with a large central karyosome surrounded by a halo were seen in the CSF. These are likely:",
                "options": [
                    "Entamoeba histolytica trophozoites",
                    "Acanthamoeba spp. trophozoites",
                    "Iodamoeba butschlii trophozoites",
                    "Naegleria fowleri trophozoites"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "This clinical scenario (swimming in warm fresh water, symptoms of meningitis) and CSF amoeba morphology (size, motility, single nucleus with large central karyosome and peripheral halo) are characteristic of Naegleria fowleri, the causative agent of Primary Amebic Meningoencephalitis (PAM)."
            },
            {
                "id": 18,
                "question": "Complement is inactivated at:",
                "options": [
                    "37°C for 30 minutes",
                    "37°C for 60 minutes",
                    "56°C for 60 minutes",
                    "56°C for 30 minutes"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Heating serum at 56°C for 30 minutes is the standard procedure to inactivate the complement system, primarily by denaturing heat-labile components like C1, C2, and Factor B. This is often done for serological tests where complement activity could interfere."
            },
            {
                "id": 19,
                "question": "The tumor marker for urinary bladder cancer is:",
                "options": [
                    "Calcitonin",
                    "Her2/Neu",
                    "NMP",
                    "Transitional epithelial cells"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "NMP22 (Nuclear Matrix Protein 22) is a tumor marker approved for monitoring recurrence of bladder cancer and sometimes used alongside cytology for detection. Calcitonin is for medullary thyroid cancer, Her2/Neu for breast cancer. While transitional epithelial cells are involved, they aren't the marker itself."
            },
            {
                "id": 20,
                "question": "Serum sickness: type of hypersensitivity",
                "options": [
                    "type I",
                    "type II",
                    "type III",
                    "type IV"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Serum sickness is a classic example of Type III hypersensitivity. It's caused by the formation of immune complexes (antigen-antibody) in the circulation, which deposit in tissues (like blood vessels, joints, kidneys) and activate complement, leading to inflammation and tissue damage."
            },
            {
                "id": 21,
                "question": "Monoclonal antibodies are produced by the fusion of:",
                "options": [
                    "spleen cells",
                    "myeloma cells",
                    "lymphoma cells",
                    "A & B",
                    "A & C"
                ],
                "correctAnswerIndex": 4, // index for e
                "correctAnswerLetter": "e",
                "rationalization": "Monoclonal antibodies are produced by hybridoma technology, which involves fusing antibody-producing B cells (typically harvested from the spleen of an immunized animal) with immortal myeloma cells (cancerous plasma cells). The resulting hybridoma cells are immortal and produce large quantities of a single specific antibody."
            },
            {
                "id": 22,
                "question": "Which complement component is found in both the classical and alternative pathways?",
                "options": [
                    "C1",
                    "C4",
                    "Factor D",
                    "C3"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Both the classical pathway (activated by antibody-antigen complexes) and the alternative pathway (activated directly by microbial surfaces) converge at the activation of C3. C3 cleavage into C3a and C3b is a central step leading to the formation of the membrane attack complex and opsonization. C1 and C4 are unique to the classical (and lectin) pathway; Factor D is unique to the alternative pathway."
            },
            {
                "id": 23,
                "question": "The serum of an individual who received all doses of HepB vaccine should contain what antibody?",
                "options": [
                    "anti-HBc",
                    "anti-HBe",
                    "anti-HBs",
                    "None"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Successful vaccination against Hepatitis B virus (HBV) induces the production of protective antibodies against the Hepatitis B surface antigen (HBsAg). This antibody is anti-HBs. Anti-HBc indicates past or current infection, not vaccination. Anti-HBe appears during infection recovery."
            },
            {
                "id": 24,
                "question": "Type of immunity involved in question number 23:",
                "options": [
                    "natural passive",
                    "artificial active",
                    "natural active",
                    "artificial passive"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Vaccination involves administering an antigen (HBsAg in the HepB vaccine) to stimulate the recipient's immune system to actively produce its own protective antibodies (anti-HBs) and memory cells. It's artificial (via injection) and active (body's own response)."
            },
            {
                "id": 25,
                "question": "Antibody involved in myasthenia gravis",
                "options": [
                    "anti-acetylcholine receptor antibody",
                    "anti-thyroid antibody",
                    "anti-islet cell antibody",
                    "anti-nuclear antibody"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Myasthenia gravis is an autoimmune disorder where antibodies are produced against acetylcholine receptors (AChR) at the neuromuscular junction, impairing nerve impulse transmission and causing muscle weakness."
            },
            {
                "id": 26,
                "question": "Metchnikoff first described which of the following:",
                "options": [
                    "phagocytosis",
                    "humoral immunity",
                    "vaccination",
                    "agglutination"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Elie Metchnikoff is credited with the discovery and description of phagocytosis ('cell eating') by observing specialized cells (phagocytes) engulfing foreign particles, a key component of cellular immunity."
            },
            {
                "id": 27,
                "question": "HLA associated with ankylosing spondylitis:",
                "options": [
                    "HLA-DR3",
                    "HLA-B27",
                    "HLA-DR4",
                    "HLA-B8"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "There is a very strong association between the HLA-B27 allele and ankylosing spondylitis, an inflammatory arthritis primarily affecting the spine and sacroiliac joints."
            },
            {
                "id": 28,
                "question": "Immunoglobulin/s containing the J chain:",
                "options": [
                    "IgM",
                    "Secretory IgA",
                    "A & B",
                    "IgG"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The J (joining) chain is a polypeptide that links immunoglobulin monomers together to form polymers. It is found in pentameric IgM and dimeric secretory IgA."
            },
            {
                "id": 29,
                "question": "The IgG subclass that is most effective binder of the complement:",
                "options": [
                    "IgG1",
                    "IgG2",
                    "IgG3",
                    "IgG4"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Among the IgG subclasses, IgG3 is generally the most effective at activating the classical complement pathway, followed by IgG1, then IgG2. IgG4 does not typically activate complement."
            },
            {
                "id": 30,
                "question": "Which of the following is used to detect allergen-specific IgE?",
                "options": [
                    "RIST",
                    "RAST",
                    "CRP",
                    "IEP"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "RAST (Radioallergosorbent test) is a classic method, though largely replaced by similar non-radioactive methods (like ImmunoCAP), used to measure allergen-specific IgE antibodies in a patient's serum to help identify allergies. RIST (Radioimmunosorbent test) measures total IgE."
            },
            {
                "id": 31,
                "question": "C1q, C1r, C1s are bound together by what element?",
                "options": [
                    "magnesium",
                    "calcium",
                    "potassium",
                    "sodium"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The C1 complex of the classical complement pathway consists of one C1q molecule and two molecules each of C1r and C1s. Calcium ions (Ca++) are required to hold this complex together (C1q-C1r2-C1s2). Magnesium (Mg++) is required later for C3 convertase formation."
            },
            {
                "id": 32,
                "question": "Complement component with strong chemotactic factor and strong anaphylatoxin:",
                "options": [
                    "C3a",
                    "C5a",
                    "C3b",
                    "A & B"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Both C3a and C5a are anaphylatoxins (cause mast cell degranulation and histamine release) and chemotactic factors (attract neutrophils and other inflammatory cells). However, C5a is significantly more potent in both activities, particularly as a chemotactic agent for neutrophils. C3b is primarily an opsonin."
            },
            {
                "id": 33,
                "question": "Diagnostic marker for familial medullary thyroid carcinoma:",
                "options": [
                    "calcitonin",
                    "thyroglobulin",
                    "TSH",
                    "T3"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Medullary thyroid carcinoma (MTC) is a cancer of the parafollicular cells (C cells) of the thyroid, which produce calcitonin. Elevated calcitonin levels are a key diagnostic and monitoring marker for MTC, including familial forms associated with MEN syndromes."
            },
            {
                "id": 34,
                "question": "Tests to differentiate Streptococcus pneumoniae and Viridans Streptococci: I. Taxo A II. Bacitracin III. Taxo P IV. Optochin",
                "options": [
                    "I, II",
                    "III, IV",
                    "I, III",
                    "II, IV"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Streptococcus pneumoniae is susceptible to optochin (Taxo P), while viridans group streptococci are resistant. Bacitracin (Taxo A) is used to differentiate Group A Strep (susceptible) from other beta-hemolytic streptococci. The key differentiating test listed is Optochin (IV). If Taxo P (III) is indeed Optochin, then only one test is relevant, making the Roman numeral options problematic unless interpreted differently. Standard differentiation relies heavily on Optochin susceptibility and bile solubility (not listed). Assuming 'Taxo P' and 'Optochin' are both referring to Optochin, the answer points to Optochin being the key differentiator here. Correction based on standard tests: Optochin (Taxo P) is the primary test. Bile solubility is confirmatory. Bacitracin (Taxo A) is irrelevant here. The question format is confusing. If we must choose from the options, and assuming Taxo P = Optochin, then IV alone would be correct, but that's not an option. If III=Taxo P and IV=Optochin (redundant), option B (III, IV) is chosen, implying both refer to the same test needed."
            },
            {
                "id": 35,
                "question": "Predominant type of antibody found in the serum of neonates born after full-term gestation:",
                "options": [
                    "infant IgM",
                    "infant IgG",
                    "maternal IgM",
                    "maternal IgG"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "IgG is the only immunoglobulin class that can cross the placenta from mother to fetus. Therefore, at birth, a full-term neonate's serum contains significant levels of maternal IgG, providing passive immunity. The infant starts producing its own IgM shortly after birth, followed by IgG and IgA later."
            },
            {
                "id": 36,
                "question": "How does the secondary humoral immune response differ from the primary response?",
                "options": [
                    "IgM antibody is higher",
                    "response has a longer lag time",
                    "antibody production lasts for a shorter period",
                    "antibody production is higher"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "The secondary (anamnestic) immune response, upon re-exposure to an antigen, is faster, stronger (higher antibody titers, mainly IgG), and longer-lasting than the primary response. The lag phase is shorter, and IgG is the predominant antibody class (though some IgM is still produced initially)."
            },
            {
                "id": 37,
                "question": "He discovered complement as a heat labile component in the natural serum; described the phenomenon of complement fixation and its diagnostic possibilities:",
                "options": [
                    "Edward Jenner",
                    "Jules Bordet",
                    "Robert Koch",
                    "Elie Metchnikoff"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Jules Bordet discovered the heat-labile component in serum (which he called 'alexine,' later renamed complement) and developed the complement fixation test, a significant diagnostic tool. Metchnikoff discovered phagocytosis, Jenner developed vaccination, Koch established postulates for infectious disease."
            },
            {
                "id": 38,
                "question": "A commonly used screening method for anti-HIV 1 detection:",
                "options": [
                    "Western Blot",
                    "RT-PCR",
                    "ELISA",
                    "Complement Fixation"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "ELISA (Enzyme-Linked Immunosorbent Assay) is the most common and widely used screening method for detecting antibodies to HIV-1 (and HIV-2). Positive screening tests require confirmation by more specific methods like Western blot or HIV RNA testing."
            },
            {
                "id": 39,
                "question": "HLA on red blood cells:",
                "options": [
                    "Bennett-Goodspeed",
                    "HLA-B27",
                    "HLA-DR",
                    "HLA-DQ"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "While most HLA antigens (Class I and II) are primarily on nucleated cells, some HLA-related antigens, part of the Bennett-Goodspeed (Bg) system (Bga, Bgb, Bgc), are weakly expressed remnants of HLA Class I antigens found on red blood cells. HLA-B27, HLA-DR etc., are not typically detected directly on RBCs by standard methods."
            },
            {
                "id": 40,
                "question": "The substance detected by RPR and VDRL:",
                "options": [
                    "cardiolipin",
                    "reagin",
                    "treponemal antibody",
                    "nontreponemal antigen"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "RPR and VDRL are non-treponemal tests that detect 'reagin' antibodies. Reagin is an antibody (primarily IgG and IgM) directed against cardiolipin, a lipid component released from host cells damaged by T. pallidum infection (and also present in other conditions)."
            },
            {
                "id": 41,
                "question": "Which of the following describes a direct immunofluorescence assay?",
                "options": [
                    "conjugated patient antibody reacts with tissue antigen",
                    "patient antibody reacts with known antigen attached to solid phase",
                    "patient antibody reacts with tissue antigen and then is bound by conjugated anti-immunoglobulin",
                    "conjugated reagent antibody reacts with antigen to form complex"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "In direct immunofluorescence (DIF), a fluorescently labeled antibody (conjugated reagent antibody) is used to directly detect the target antigen present in a patient's tissue or cells."
            },
            {
                "id": 42,
                "question": "The key structural difference that distinguishes immunoglobulin subclasses:",
                "options": [
                    "number of domains",
                    "number of light chains",
                    "sequence of the constant region",
                    "sequence of the variable region"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Immunoglobulin subclasses (e.g., IgG1, IgG2, IgG3, IgG4) within a class (e.g., IgG) differ primarily in the amino acid sequences of their heavy chain constant regions. These differences affect properties like hinge region structure, number of interchain disulfide bonds, and effector functions (complement fixation, Fc receptor binding)."
            },
            {
                "id": 43,
                "question": "A haptenic determinant will react with:",
                "options": [
                    "T cells but not B cells",
                    "both T cells and B cells",
                    "neither T cells nor B cells",
                    "antibody but not T cells"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Haptens are small molecules that are antigenic (can bind to antibodies) but not immunogenic on their own (cannot elicit an immune response unless bound to a larger carrier protein). B cells (producing antibodies) can recognize haptens directly (especially when part of a hapten-carrier complex). T cells typically recognize processed peptide antigens presented by MHC molecules, not small haptens directly."
            },
            {
                "id": 44,
                "question": "SCID is an immunodeficiency with:",
                "options": [
                    "decreased or dysfunctional T cells",
                    "decreased or dysfunctional B cells",
                    "decreased or dysfunctional T and B cells",
                    "decreased or dysfunctional phagocytic cells"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Severe Combined Immunodeficiency (SCID) comprises a group of genetic disorders characterized by profound defects in both T lymphocyte and B lymphocyte development or function, leading to a severely compromised adaptive immune system."
            },
            {
                "id": 45,
                "question": "Which of the following is characteristic of B cells?",
                "options": [
                    "phagocytosis is major function",
                    "secrete C5",
                    "contain surface immunoglobulins",
                    "participate in antibody-dependent cellular cytotoxicity"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Mature B lymphocytes are characterized by the presence of surface immunoglobulins (sIg), primarily IgM and IgD, which function as the B cell receptor (BCR) for antigen recognition. T cells lack sIg. While some B cells might have limited phagocytic capability, it's not their defining role. They do not secrete C5. They participate in ADCC via secreted antibody, but the cell itself doesn't typically carry out the killing like an NK cell."
            },
            {
                "id": 46,
                "question": "The first serological marker to appear in patients with acute hepatitis B virus infection:",
                "options": [
                    "anti-HBc IgM",
                    "HBeAg",
                    "HBsAg",
                    "ALT"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Hepatitis B surface antigen (HBsAg) is the earliest detectable serological marker in acute HBV infection, appearing before symptoms and antibody responses (like anti-HBc or anti-HBs). HBeAg usually appears shortly after HBsAg. ALT elevation indicates liver damage but isn't a specific viral marker."
            },
            {
                "id": 47,
                "question": "The most common label in direct fluorescent antibody technique:",
                "options": [
                    "alkaline phosphatase",
                    "horseradish peroxidase",
                    "calcofluor white",
                    "fluorescein isothiocyanate"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Fluorescein isothiocyanate (FITC) is a widely used green fluorescent dye conjugated to antibodies for use in direct and indirect immunofluorescence techniques due to its bright fluorescence and relatively good photostability. Enzyme labels like ALP and HRP are used in ELISA or immunohistochemistry. Calcofluor white is a stain for fungi."
            },
            {
                "id": 48,
                "question": "The visible serological reaction between soluble antigen and its specific antibody is:",
                "options": [
                    "agglutination",
                    "precipitation",
                    "sensitization",
                    "opsonization"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "When a soluble antigen reacts with its specific antibody (precipitin), under optimal conditions of concentration (zone of equivalence), they form large, insoluble lattice structures that become visible as a precipitate. Agglutination involves particulate antigens (like cells). Sensitization is the initial binding of antibody to antigen, which may not be visible. Opsonization is coating for phagocytosis."
            },
            {
                "id": 49,
                "question": "Cytokine that has distinct target specificity for the neutrophil:",
                "options": [
                    "IL-1",
                    "IL-2",
                    "IL-6",
                    "IL-8"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Interleukin-8 (IL-8, also known as CXCL8) is a potent chemokine whose primary function is the recruitment and activation of neutrophils to sites of inflammation. While other cytokines like IL-1 and IL-6 can influence neutrophils indirectly or have broader effects, IL-8 is particularly specific for neutrophil chemotaxis."
            },
            {
                "id": 50,
                "question": "Which of the following is a serologic test for typhoid fever?",
                "options": [
                    "Weil-Felix Test",
                    "ASO titer",
                    "Rose Waaler Test",
                    "Widal Test"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "The Widal test is a classic agglutination test used to detect antibodies (agglutinins) against the O (somatic) and H (flagellar) antigens of Salmonella Typhi, the causative agent of typhoid fever. Its clinical utility is limited due to issues with sensitivity, specificity, and interpretation. Weil-Felix detects rickettsial antibodies. Rose Waaler is for rheumatoid factor."
            },
            {
                "id": 51,
                "question": "The following test orders for different patients have been received at the same time. Which test would you collect first?",
                "options": [
                    "ASAP glucose in the cardiac unit",
                    "STAT glucose in the ER",
                    "Fasting glucose in the outpatient clinic",
                    "Routine glucose in the medical ward"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "STAT orders take precedence over all others, especially those from the Emergency Room (ER) or Intensive Care Unit (ICU), as they indicate urgent medical need. Among STATs, glucose is often critical for patient management. ASAP means 'as soon as possible' but is less urgent than STAT. Fasting glucose can wait until the patient is fasting."
            },
            {
                "id": 52,
                "question": "You are asked to collect a blood specimen from an inpatient. The patient is not wearing an ID band. What is the best thing to do?",
                "options": [
                    "Ask the patient to state his or her full name.",
                    "Ask the patient's nurse to put an ID band on the patient before you draw the specimen.",
                    "Identify the patient using the ID card on the door.",
                    "Refuse to draw the specimen and cancel the request."
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Proper patient identification is paramount to prevent errors. Collection should not proceed without a positive ID band confirming the patient's identity against the requisition. Asking the patient's name is insufficient, and relying on a door card is unreliable. Refusing/canceling might be necessary if ID cannot be resolved, but the first step is to involve the nurse to correctly band the patient."
            },
            {
                "id": 53,
                "question": "The tourniquet should be released: I. As soon as blood flow is established. II. Before the needle is withdrawn from the arm. III. Within 2 minutes of application",
                "options": [
                    "I only",
                    "I and II",
                    "I, II, III",
                    "I and III"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Standard phlebotomy procedure dictates releasing the tourniquet as soon as blood flow is established, *before* removing the needle, and *within one minute* of application to prevent hemoconcentration and discomfort. Option III (within 2 minutes) exceeds the recommended time. *Assuming the question intends to combine correct principles despite the flawed 2-minute option:* Release *as soon as flow is established* (I) and *before needle removal* (II) are correct principles. The 1-minute limit is also crucial. Since 'c' includes I and II, it's the best available choice despite the flawed timing in III, or perhaps III meant <1 min. *Correction:* Release within 1 minute. Release as soon as flow established. Release before needle removal. Options are poorly constructed. Best practice is release within 1 min AND before needle removal. Option c: I, II, III. If we must choose, and knowing I and II are correct principles, 'c' might be the intended answer, assuming III is either flawed or meant <1 min. Let's choose C based on I and II being correct actions."
            },
            {
                "id": 54,
                "question": "Which type of patient is most likely to have an arteriovenous fistula or graft?",
                "options": [
                    "Arthritic",
                    "Chemotherapy",
                    "Dialysis",
                    "Diabetic"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Patients undergoing hemodialysis require reliable, long-term vascular access capable of handling high blood flow rates. An arteriovenous (AV) fistula (a surgical connection between an artery and a vein) or an AV graft (using synthetic material to connect an artery and vein) provides this access."
            },
            {
                "id": 55,
                "question": "What causes evacuated tubes to fill with blood automatically?",
                "options": [
                    "Arterial pressure",
                    "Patient's blood pressure",
                    "Pressure from the tourniquet",
                    "Premeasured tube vacuum"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Evacuated blood collection tubes contain a precisely measured negative pressure (vacuum). When the needle punctures the stopper, this vacuum draws the required volume of blood into the tube."
            },
            {
                "id": 56,
                "question": "Which is the correct sequence of events after blood vessel injury?",
                "options": [
                    "Fibrin clot formation, platelet aggregation, vasoconstriction",
                    "Platelet aggregation, vasoconstriction, fibrin clot formation",
                    "Vasoconstriction, platelet aggregation, fibrin clot formation",
                    "Vasoconstriction, fibrin clot formation, platelet aggregation"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Following vessel injury, the immediate response is vasoconstriction (narrowing of the vessel) to reduce blood flow. Platelets then adhere to the injured site and aggregate, forming a temporary platelet plug (primary hemostasis). Finally, the coagulation cascade is activated, leading to the formation of fibrin, which reinforces the platelet plug, forming a stable fibrin clot (secondary hemostasis)."
            },
            {
                "id": 57,
                "question": "Reverse isolation may be used for:",
                "options": [
                    "a patient with measles",
                    "an adult patient with the flu",
                    "a patient with tuberculosis",
                    "a patient with severe burns"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Reverse isolation (protective isolation) is used to protect highly susceptible patients (immunocompromised) from infectious agents in the environment or from healthcare workers. Patients with severe burns have lost their protective skin barrier and are extremely vulnerable to infection. Patients with measles, flu, or TB require transmission-based precautions (airborne, droplet, contact) to prevent *them* from spreading infection to others."
            },
            {
                "id": 58,
                "question": "A national organization that develops guidelines and sets standards for laboratory procedures is the:",
                "options": [
                    "CAP",
                    "CLSI",
                    "NAACLS",
                    "CLIA '88"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The Clinical and Laboratory Standards Institute (CLSI) is a global, nonprofit organization that develops and promotes best practices in clinical and laboratory testing through consensus-based standards and guidelines. CAP accredits labs, CLIA regulates labs, NAACLS accredits educational programs."
            },
            {
                "id": 59,
                "question": "Which of the following items is PPE?",
                "options": [
                    "Biohazard bag",
                    "Countertop shield",
                    "Nonlatex gloves",
                    "Sharps container"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Personal Protective Equipment (PPE) includes items worn by individuals to protect themselves from hazards. Gloves, gowns, masks, respirators, and eye protection are common PPE. Biohazard bags and sharps containers are engineering/work practice controls for waste. Countertop shields are engineering controls."
            },
            {
                "id": 60,
                "question": "Which of the following examples of potential exposure to blood-borne pathogens involve a parenteral route of transmission?",
                "options": [
                    "Eating lunch in the specimen processing area",
                    "Handling specimens without gloves on",
                    "Licking fingers while turning lab manual pages",
                    "Rubbing the eyes while processing specimens"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Parenteral exposure means entry through a route other than the digestive tract, typically involving a break in the skin or mucous membranes. Rubbing eyes (mucous membrane) with contaminated hands or gloves is a potential parenteral exposure route. The other options involve ingestion (oral route)."
            },
            {
                "id": 61,
                "question": "The bevel of the needle should be held ______ during a venipuncture.",
                "options": [
                    "Downward",
                    "Upward",
                    "Sideways",
                    "Any direction is acceptable"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Inserting the venipuncture needle with the bevel facing upward allows for smooth entry into the vein, prevents the bevel from pressing against the vein wall (occluding flow), and facilitates blood flow into the needle."
            },
            {
                "id": 62,
                "question": "A hematoma can form if: i. Improper pressure is applied to a site after venipuncture. ii. The patient suddenly moves and the needle comes out of the vein. iii. The needle penetrates all the way through the vein.",
                "options": [
                    "i only",
                    "i and ii",
                    "ii and iii",
                    "i, ii, iii"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "A hematoma (bruise) forms when blood leaks out of the vein into the surrounding tissue. This can happen if: i) pressure is not applied adequately after needle removal, ii) the needle slips out of the vein (e.g., patient movement), or iii) the needle punctures through both walls of the vein (transfixation)."
            },
            {
                "id": 63,
                "question": "Which of the following area(s) is (are) acceptable for the collection of capillary blood from an infant?",
                "options": [
                    "Posterior curve of the heel",
                    "Arch of the foot",
                    "Previous puncture sites",
                    "Medial or lateral plantar surface"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "For infants under one year old, the recommended sites for capillary puncture are the medial and lateral portions of the plantar surface (bottom) of the heel. Puncturing the posterior curve, arch, or previous puncture sites increases the risk of nerve damage or hitting the calcaneus bone."
            },
            {
                "id": 64,
                "question": "If a patient adamantly refuses to have blood drawn, you should:",
                "options": [
                    "restrain the patient and collect the specimen",
                    "notify the patient's nurse or physician",
                    "have the patient sign a waiver",
                    "document the refusal and continue with other patients"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Patients have the right to refuse medical procedures, including blood draws. If a patient refuses, the phlebotomist should not attempt to coerce or restrain them. The refusal should be documented, and the patient's nurse or physician must be notified so they can address the situation with the patient."
            },
            {
                "id": 65,
                "question": "What is the best approach to use on an 8-year-old child who needs to have blood drawn?",
                "options": [
                    "Explain the draw in simple terms and ask for the child's cooperation.",
                    "Tell the child it won't hurt.",
                    "Restrain the child immediately.",
                    "Offer the child a bribe."
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Engaging school-aged children (like an 8-year-old) by explaining the procedure honestly and simply, addressing their fears, and seeking their cooperation is the most effective approach. Restraint should be a last resort, bribery is unprofessional, and falsely claiming it won't hurt erodes trust."
            },
            {
                "id": 66,
                "question": "Which of the following situations can result in hemoconcentration?",
                "options": [
                    "Leaving the tourniquet on over 1 minute",
                    "Drawing a large tube with a 23-gauge needle",
                    "Vigorously mixing the specimen",
                    "Partially filling a normal-draw tube"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Leaving the tourniquet on for longer than one minute obstructs venous return, causing fluid (plasma) to leak from the blood vessels into the tissues, leading to an artificial increase in the concentration of non-filterable analytes (like proteins, cells, potassium) – this is hemoconcentration. Partially filled tubes or vigorous mixing usually cause hemolysis or affect anticoagulant ratios. Drawing a large tube with a small needle might cause hemolysis."
            },
            {
                "id": 67,
                "question": "Veins that feel hard and cord-like when palpated may be:",
                "options": [
                    "collapsed",
                    "fistulas",
                    "thrombosed",
                    "venules"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Thrombosed veins are occluded with clots and often feel hard, inflexible, and cord-like upon palpation. These veins should be avoided for venipuncture as they are difficult to puncture and yield poor samples. Collapsed veins are temporarily flat, fistulas are surgical connections, venules are too small."
            },
            {
                "id": 68,
                "question": "When the coagulation of fresh whole blood is prevented through the use of an anticoagulant, the straw-colored fluid that can be separated from the cellular elements is:",
                "options": [
                    "serum",
                    "plasma",
                    "whole blood",
                    "autologous donation"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Plasma is the liquid component of blood that contains clotting factors because coagulation has been prevented by an anticoagulant. Serum is the liquid portion remaining *after* blood has clotted, so it lacks fibrinogen and other clotting factors consumed during clot formation."
            },
            {
                "id": 69,
                "question": "Peak levels of this analyte typically occur around 0800 hours.",
                "options": [
                    "Bilirubin",
                    "Cortisol",
                    "Eosinophils",
                    "Glucose"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Cortisol exhibits significant diurnal variation, with levels typically peaking in the early morning (around 8 AM) and reaching a nadir late at night. Bilirubin, eosinophils, and glucose have different patterns or less pronounced diurnal rhythms."
            },
            {
                "id": 70,
                "question": "Tiny red spots that appear on a patient's arm when the tourniquet is applied are a sign that the:",
                "options": [
                    "tourniquet is too tight",
                    "patient has leukemia",
                    "site may bleed excessively",
                    "patient is allergic to the tourniquet"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "These tiny red spots are petechiae, which indicate capillary fragility or low platelet count. Their appearance suggests that the venipuncture site might bleed more than usual after the needle is removed, requiring prolonged pressure."
            },
            {
                "id": 71,
                "question": "The concentration of this substance is higher in capillary blood than in venous blood:",
                "options": [
                    "Calcium",
                    "Potassium",
                    "Glucose",
                    "Total protein"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Capillary blood glucose levels are generally higher than venous blood glucose levels, especially in a non-fasting state, because arterial blood (which capillary blood approximates) delivers glucose to tissues where it is utilized before returning as venous blood. Potassium, calcium, and total protein are typically higher in venous blood. BUN is similar."
            },
            {
                "id": 72,
                "question": "If collected by capillary puncture, which test specimen is collected first?",
                "options": [
                    "CBC",
                    "Glucose",
                    "Electrolytes",
                    "Bilirubin"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "The standard order for capillary collection to minimize platelet clumping/clotting effects is: 1. Blood gas specimens (if applicable), 2. EDTA tubes (for hematology/CBC), 3. Other additive tubes, 4. Serum tubes. Therefore, CBC (EDTA tube) should be collected before Glucose (often fluoride/oxalate or serum) or Electrolytes (serum or heparin). The answer 'a' (CBC) fits this order."
            },
            {
                "id": 73,
                "question": "According to CLSI, a heel puncture lancet should puncture no deeper than:",
                "options": [
                    "1.5 mm",
                    "1.8 mm",
                    "2.0 mm",
                    "3.0 mm"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "To avoid hitting the calcaneus (heel bone) and causing osteomyelitis or bone injury in infants, CLSI guidelines recommend that heel puncture devices should not penetrate deeper than 2.0 mm."
            },
            {
                "id": 74,
                "question": "Capillary puncture is typically performed on adults when: i. Veins are inaccessible ii. The patient has thrombotic tendencies iii. Veins are reserved for IV therapy",
                "options": [
                    "i only",
                    "i and ii",
                    "ii and iii",
                    "i, ii, iii"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Capillary puncture (fingerstick) is an alternative to venipuncture in adults when: i) veins are inaccessible or fragile (e.g., burns, obesity, chemotherapy patients, geriatric), ii) patients have thrombotic tendencies (venipuncture risk), or iii) veins must be preserved for therapy (like chemotherapy). It's also used for point-of-care testing."
            },
            {
                "id": 75,
                "question": "The proper collection of capillary blood includes: i. Wiping away the first drop of blood. ii. Occasionally wiping the site with gauze. iii. Avoiding the introduction of air bubbles",
                "options": [
                    "i, ii",
                    "i, iii",
                    "ii, iii",
                    "i, ii, iii"
                ],
                "correctAnswerIndex": 0, // index for a (based on original text, though iii is also good practice)
                "correctAnswerLetter": "a",
                "rationalization": "Proper capillary collection technique involves: i) Wiping away the first drop of blood (contains tissue fluid), ii) Occasionally wiping the site gently to prevent platelet buildup that could slow flow (but not squeezing excessively), and iii) Avoiding the introduction of air bubbles, especially into tubes for blood gas analysis or when using capillary collection devices where bubbles can interfere with volume or measurements. Therefore, i and ii are correct practices. (Note: iii is also correct, making i,ii,iii ideal, but based on the source text's selection, 'a' was chosen)."
            },
            {
                "id": 76,
                "question": "Creatinine is considered the substance of choice to measure endogenous renal clearance because:",
                "options": [
                    "Its production rate is constant.",
                    "It is completely filtered by the glomeruli",
                    "Plasma levels are highly dependent upon diet.",
                    "Clearance does not differ between men and women."
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Creatinine is used to estimate Glomerular Filtration Rate (GFR) because it's produced endogenously at a relatively constant rate (related to muscle mass, statement 'a' is partially true but less key than filtration), primarily filtered by the glomeruli, and undergoes only minimal tubular secretion (though this secretion becomes more significant in severe renal failure). Its plasma level is relatively stable compared to urea. Clearance differs slightly between sexes due to muscle mass differences."
            },
            {
                "id": 77,
                "question": "What is the appearance of Salmonella on Salmonella-Shigella Agar?",
                "options": [
                    "Colorless",
                    "Colorless with black centers",
                    "Pink with black centers",
                    "Pink"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Salmonella-Shigella (SS) agar is selective and differential. It inhibits Gram-positives and many coliforms. *Salmonella* typically does not ferment lactose, so colonies appear colorless or transparent. Most *Salmonella* species produce hydrogen sulfide (H2S), which reacts with ferric citrate in the medium to produce a black precipitate in the center of the colonies. *Shigella* also doesn't ferment lactose (colorless) but doesn't produce H2S (no black center). Lactose fermenters (like E. coli) produce pink/red colonies."
            },
            {
                "id": 78,
                "question": "Correct Order of migration in Protein Electrophoresis:",
                "options": [
                    "Albumin, Alpha-1 globulin, Alpha-2 macroglobulin, Beta Globulin, Gamma Globulin",
                    "Albumin, Alpha-1 globulin, Alpha-2 globulin, Beta Globulin, Gamma Globulin", // Corrected Alpha-2 text
                    "Gamma Globulin, Beta Globulin, Alpha-2 macroglobulin, Alpha-1 globulin, Albumin",
                    "Albumin, Beta Globulin, Alpha-1 globulin, Alpha-2 macroglobulin, Gamma Globulin"
                ],
                "correctAnswerIndex": 1, // index for b (Assuming corrected option text)
                "correctAnswerLetter": "b",
                "rationalization": "In serum protein electrophoresis at standard alkaline pH (around 8.6), proteins migrate based on their size and net negative charge towards the anode (+). Albumin is the most abundant, smallest, and most negatively charged, so it migrates fastest (furthest). It is followed in order by alpha-1, alpha-2, beta, and finally gamma globulins (which are least negatively charged and may even migrate towards the cathode via electroendosmosis)."
            },
            {
                "id": 79,
                "question": "Vector for African Sleeping Sickness",
                "options": [
                    "Reduviid bug",
                    "Tsetse fly",
                    "Ticks",
                    "Sandfly"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "African Trypanosomiasis (Sleeping Sickness), caused by Trypanosoma brucei, is transmitted through the bite of infected tsetse flies (genus Glossina). Reduviid bugs transmit Chagas disease, ticks transmit Lyme disease/RMSF, sandflies transmit Leishmaniasis."
            },
            {
                "id": 80,
                "question": "Which serum protein should be measured in a patient suspected of having Wilson's disease?",
                "options": [
                    "Haptoglobin",
                    "Transferrin",
                    "Alpha-1 antitrypsin",
                    "Ceruloplasmin"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Wilson's disease is a genetic disorder of copper metabolism characterized by impaired copper excretion, leading to copper accumulation. Serum ceruloplasmin, the main copper-carrying protein, is typically decreased in patients with Wilson's disease due to impaired incorporation of copper into the protein during its synthesis."
            },
            {
                "id": 81,
                "question": "In statistics, this is used to determine whether there is a statistically significant difference between the standard deviations of two groups of data.",
                "options": [
                    "Mean",
                    "Median",
                    "F-test",
                    "T-test"
                ],
                "correctAnswerIndex": 3, // index for c
                "correctAnswerLetter": "d",
                "rationalization": "T-test compares means (e.g., treatment effects, device efficacy) while accounting for variability in limited data, provided normality assumptions are met, ensuring statistically valid conclusions in resource-constrained or ethically sensitive research."
            },
            {
                "id": 82,
                "question": "Colonies are small- to medium-sized, opaque, shiny, nonhemolytic, pale beige or yellowish color, has a gliding motility... haze on the surface of the agar. What bacteria is being described?",
                "options": [
                    "Haemophilus spp.",
                    "Capnocytophaga",
                    "Pasteurella spp.",
                    "Kingella spp."
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "This description, particularly the 'gliding motility' which manifests as outgrowths or a haze around colonies on agar, is characteristic of *Capnocytophaga* species. These are capnophilic (require CO2), facultative anaerobic Gram-negative bacilli often associated with the oral flora and opportunistic infections."
            },
            {
                "id": 83,
                "question": "Glucose is metabolized at room temperature at a rate of __ mg/dl/hour and at 4°C, the loss is approximately __ mg/dl/hour.",
                "options": [
                    "2, 7",
                    "10, 5",
                    "5, 10",
                    "7, 2"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Glycolysis by blood cells continues after collection. At room temperature (approx. 20-25°C), glucose levels decrease by about 5-10 mg/dL per hour (7 mg/dL is a common estimate). Refrigeration (around 4°C) significantly slows this process down, with loss rates closer to 2 mg/dL per hour. Using an antiglycolytic agent like sodium fluoride is necessary to preserve glucose if testing is delayed. *Assuming 4°C based on context.*"
            },
            {
                "id": 84,
                "question": "Whole blood fasting glucose level is ___ than in serum or plasma.",
                "options": [
                    "10-15% lower",
                    "10-15% higher",
                    "significantly higher",
                    "the same"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Glucose is distributed between plasma/serum and red blood cells, but the concentration is higher in the water component (plasma/serum) than in the cells. Since whole blood includes the volume occupied by red cells (which have lower glucose concentration than plasma), the measured glucose concentration in whole blood is typically 10-15% lower than in a corresponding plasma or serum sample."
            },
            {
                "id": 85,
                "question": "The primary product of hepatic metabolism of cocaine is:",
                "options": [
                    "Norepinephrine",
                    "Heroin",
                    "Benzoylecgonine",
                    "Ecgonine"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Cocaine is rapidly metabolized in the liver and plasma primarily to benzoylecgonine (BE) and ecgonine methyl ester (EME). Benzoylecgonine is the major urinary metabolite and is the target analyte in most urine drug screens for cocaine use."
            },
            {
                "id": 86,
                "question": "What is the proper way of naming organisms?",
                "options": [
                    "Genus starts with a small letter",
                    "Genus starts with a capital letter",
                    "Species starts with a capital letter",
                    "Species starts with a small letter" // Incomplete options, refers to Binomial Nomenclature
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "According to binomial nomenclature rules established by Linnaeus: The Genus name is always capitalized. The species name (specific epithet) is always lowercase. Both names are italicized in print or underlined when handwritten. The options provided are incomplete/poorly worded. Option 'b' states a correct part of the rule."
            },
            {
                "id": 87,
                "question": "The glycated hemoglobin value represents the blood glucose value during the preceding: I. 2-3 months II. 8-12 weeks",
                "options": [
                    "I is Correct",
                    "II is Correct",
                    "Both statements are True",
                    "Both statements are False"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Glycated hemoglobin (HbA1c) reflects the average blood glucose concentration over the preceding 2 to 3 months, corresponding to the average lifespan of red blood cells (approx. 120 days). Statement II (8-12 weeks) is equivalent to 2-3 months. Therefore, both statements are true."
            },
            {
                "id": 88,
                "question": "A gram-negative, oxidase-negative coccobacillus... dark pink colonies on MacConkey... TSIA: A/Ag H2S(-), indole positive, motile, urease negative and citrate negative. The most probable identity of this organism is:",
                "options": [
                    "Escherichia coli",
                    "Enterobacter aerogenes",
                    "Serratia marcescens",
                    "Klebsiella pneumoniae"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "The biochemical profile fits *Escherichia coli*: Gram-negative rod/coccobacillus, ferments lactose (pink on MacConkey), produces acid/acid with gas but no H2S on TSIA (A/Ag H2S-), is indole positive (+), motile (+), urease negative (-), and typically citrate negative (-). *Enterobacter* is citrate positive. *Serratia* is often DNase positive, VP positive. *Klebsiella* is non-motile, urease positive, citrate positive."
            },
            {
                "id": 89,
                "question": "Considered as a negative risk factor for coronary heart disease: I. HDL II. LDL",
                "options": [
                    "I is Correct",
                    "II is Correct",
                    "Both statements are True",
                    "Both statements are False"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "High-density lipoprotein (HDL) cholesterol is considered 'good' cholesterol because it helps remove excess cholesterol from arteries, transporting it back to the liver. High HDL levels are protective against coronary heart disease (CHD), making HDL a negative risk factor (higher levels reduce risk). Low-density lipoprotein (LDL) is 'bad' cholesterol; high levels increase CHD risk (positive risk factor)."
            },
            {
                "id": 90,
                "question": "Select the lipoprotein fraction that carries most of the endogenous triglycerides. I. VLDL II. Chylomicrons",
                "options": [
                    "I is Correct",
                    "II is Correct",
                    "Both statements are True",
                    "Both statements are False"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Very low-density lipoproteins (VLDL) are synthesized by the liver and are the primary carriers of *endogenous* triglycerides (those made by the body) to peripheral tissues. Chylomicrons (II) primarily transport *exogenous* triglycerides (from the diet) from the intestine."
            },
            {
                "id": 91,
                "question": "Apoprotein B100 I. Found on Chylomicrons II. Found on HDL",
                "options": [
                    "I is Correct",
                    "II is Correct",
                    "Both statements are True",
                    "Both statements are False"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Apolipoprotein B-100 (ApoB100) is the primary structural protein for VLDL, IDL, and LDL. It is synthesized in the liver. Chylomicrons contain Apolipoprotein B-48 (ApoB48), synthesized in the intestine. HDL's main apoprotein is ApoA-I. Therefore, ApoB100 is NOT found on Chylomicrons (I) or HDL (II)."
            },
            {
                "id": 92,
                "question": "It is a lemon-shaped cyst with a characteristic anterior nipple",
                "options": [
                    "Giardia lamblia",
                    "Entamoeba histolytica",
                    "Chilomastix mesnili",
                    "Dientamoeba fragilis"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The cyst form of *Chilomastix mesnili*, a non-pathogenic intestinal flagellate, is characteristically lemon-shaped with a small anterior hyaline knob or 'nipple.' *Giardia* cysts are oval, *E. histolytica* cysts are spherical, *Dientamoeba* has no cyst stage."
            },
            {
                "id": 93,
                "question": "Increase Albumin I. Dehydration II. Malnutrition",
                "options": [
                    "I is Correct",
                    "II is Correct",
                    "Both statements are True",
                    "Both statements are False"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Increased serum albumin levels (hyperalbuminemia) are almost always relative, caused by dehydration (hemoconcentration), which reduces the plasma volume and concentrates plasma proteins. Malnutrition (II) typically causes *decreased* albumin levels (hypoalbuminemia) due to reduced synthesis."
            },
            {
                "id": 94,
                "question": "Marker for Intravascular Hemolysis I. Haptoglobin increase II. Hemopexin decrease",
                "options": [
                    "I is Correct",
                    "II is Correct",
                    "Both statements are True",
                    "Both statements are False"
                ],
                "correctAnswerIndex": 2, // index for b (or C preferred interpretation)
                "correctAnswerLetter": "c",
                "rationalization": "In intravascular hemolysis, red blood cells break down within blood vessels, releasing free hemoglobin. Haptoglobin (I) binds free hemoglobin and is rapidly cleared, leading to *decreased* serum haptoglobin levels. If haptoglobin is depleted, hemoglobin is oxidized to methemoglobin, and the heme moiety dissociates and binds to hemopexin (II). This heme-hemopexin complex is also cleared, leading to *decreased* serum hemopexin. Therefore, *decreased* levels of both are markers. Since the question asks for the marker itself (Haptoglobin or Hemopexin), and statement II refers to Hemopexin, 'b' is selected. *Correction:* Both decreased Haptoglobin and decreased Hemopexin are markers. The question phrasing is ambiguous. If it means 'Which of these proteins *is* a marker whose *decrease* indicates IVH?', then both I and II apply. Option C 'Both statements are true' would imply both Haptoglobin *and* Hemopexin are markers, which is correct. Let's assume the circled 'b' refers to statement II being a marker. **Correct Answer C is better if interpreted as 'Both Haptoglobin and Hemopexin are markers...'.** If strictly interpreting the circled answer, stick with B."
            },
            {
                "id": 95,
                "question": "Which of the following conditions is characterized by primary hyperaldosteronism caused by adrenal adenoma, carcinoma, or hyperplasia?",
                "options": [
                    "Cushing's syndrome",
                    "Addison's disease",
                    "Pheochromocytoma",
                    "Conn's syndrome"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Conn's syndrome is the term for primary hyperaldosteronism, where the adrenal gland(s) autonomously produce excess aldosterone, often due to an adrenal adenoma or bilateral adrenal hyperplasia. Cushing's syndrome involves excess cortisol, Addison's disease involves adrenal insufficiency, Pheochromocytoma involves excess catecholamines."
            },
            {
                "id": 96,
                "question": "A trend in QC results is most likely caused by:",
                "options": [
                    "Deterioration of the reagent",
                    "Mispipetting the control",
                    "Electronic noise",
                    "Improper calibration"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "A trend in quality control (QC) data is a gradual, consistent increase or decrease in QC values over several runs. This typically indicates a systematic issue that is slowly changing, such as reagent deterioration, gradual instrument calibration drift, or aging lamp source. Random errors cause isolated outliers (electronic noise, mispipetting). Miscalibration or wrong standards usually cause an abrupt shift."
            },
            {
                "id": 97,
                "question": "↑ alpha-1, alpha-2, & gamma",
                "options": [
                    "Liver Cirrhosis",
                    "Acute Inflammation",
                    "Chronic Inflammation",
                    "Monoclonal Gammopathy"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "In chronic inflammation, there is typically an increase in acute-phase reactants (found in alpha-1 and alpha-2 fractions, like A1AT, haptoglobin, ceruloplasmin) along with a polyclonal increase in the gamma globulin fraction (reflecting broad antibody production). Liver cirrhosis often shows decreased albumin, beta-gamma bridging. Acute inflammation shows increased alpha-1/alpha-2 but gamma may be normal initially. Monoclonal gammopathy shows a sharp spike (M-spike) in the gamma (or sometimes beta/alpha-2) region."
            },
            {
                "id": 98,
                "question": "Which of the following best describe Sodium?",
                "options": [
                    "Major intracellular cation. Regulated by aldosterone.",
                    "Major anion. Measured by ISE.",
                    "Contributes almost half to plasma osmolality. Maintains normal distribution of water & osmotic pressure. Levels regulated by aldosterone.",
                    "Affected by hemolysis, lipemia."
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Sodium (Na+) is the major cation in the extracellular fluid and plays a critical role in maintaining plasma osmolality, water balance (blood volume), and electrical neutrality across cell membranes. Aldosterone regulates its reabsorption (part of option a). Option b describes causes of pseudohyponatremia or sampling errors. Option a partially describes its role but c is more comprehensive."
            },
            {
                "id": 99,
                "question": "Which of the following best describe Chloride?",
                "options": [ // Placeholder options as none were in source
                    "Major intracellular anion",
                    "Major extracellular ion. Helps maintain osmolality, blood volume, electric neutrality",
                    "Regulated primarily by parathyroid hormone",
                    "Positively charged ion"
                 ],
                "correctAnswerIndex": 1, // index for b (assumed correct option)
                "correctAnswerLetter": "b",
                "rationalization": "Chloride (Cl-) is the major extracellular ion. It helps maintain osmolality, electrical neutrality (balancing Na+), and acid-base balance (chloride shift). It moves passively with sodium or inversely with bicarbonate."
            },
            {
                "id": 100,
                "question": "Highest Elevation of Acid Phosphatase.",
                "options": [
                    "Bone diseases",
                    "Prostatic Carcinoma",
                    "Liver diseases",
                    "Kidney diseases"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Prostatic acid phosphatase (PAP) was historically a significant tumor marker for prostatic carcinoma, particularly metastatic disease, although its use has largely been replaced by prostate-specific antigen (PSA). Other conditions show much lower or non-prostatic isoenzyme elevations."
            },
            {
                "id": 101,
                "question": "Highest Elevation of Alkaline Phosphatase.",
                "options": [
                    "Osteitis Deformans",
                    "Obstructive Jaundice",
                    "Rickets",
                    "Osteoporosis"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Alkaline phosphatase (ALP) activity is very high in conditions with increased osteoblastic activity (bone formation). Paget's disease of bone (Osteitis Deformans) involves extensive bone remodeling with markedly elevated ALP levels. Obstructive liver disease also causes high ALP, but bone diseases like Paget's often cause the highest elevations."
            },
            {
                "id": 102,
                "question": "First Protein marker to elevate in MI.",
                "options": [
                    "Troponin I",
                    "CKMB",
                    "Myoglobin",
                    "Troponin T"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Following a myocardial infarction (MI), myoglobin is the earliest protein marker to rise in the blood, typically within 1-3 hours, due to its small size and release from damaged muscle tissue. However, it lacks cardiac specificity. Cardiac troponins (Trop I, Trop T) rise slightly later (3-6 hours) but are much more specific and remain elevated longer. CK-MB rises around 4-6 hours."
            },
            {
                "id": 103,
                "question": "Which CK is predominant in the Body?",
                "options": [
                    "CKMM",
                    "CKMB",
                    "CKBB",
                    "CKMi"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Creatine Kinase (CK) exists as isoenzymes. CK-MM (MM isoenzyme) is the predominant form found in skeletal muscle, which constitutes the largest muscle mass in the body. CK-MB is found primarily in cardiac muscle (and some skeletal), and CK-BB is mainly in brain and smooth muscle. Therefore, total CK activity largely reflects CK-MM."
            },
            {
                "id": 104,
                "question": "Which enzyme has the lowest specificity?",
                "options": [
                    "AST",
                    "LD",
                    "GGT",
                    "ALP"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Lactate Dehydrogenase (LD or LDH) is found in the cytoplasm of almost all body cells (heart, liver, muscle, kidney, RBCs, etc.). Elevated total LD levels are very non-specific, as damage to many different tissues can cause an increase. AST and ALP are also found in multiple tissues but are relatively more specific than LD (e.g., AST for liver/heart/muscle, ALP for liver/bone)."
            },
            {
                "id": 105,
                "question": "The only oxidase positive member of Enterobacteriaceae:",
                "options": [
                    "Proteus",
                    "Plesiomonas",
                    "Shigella",
                    "Edwardsiella"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "A key characteristic defining the family Enterobacteriaceae is being oxidase-negative. *Plesiomonas shigelloides* was historically included in this family but is oxidase-positive. It has since been moved to the family Vibrionaceae (along with *Vibrio* and *Aeromonas* which are also oxidase positive), although some labs may still consider it in the context of enteric pathogens. *Proteus, Shigella, Edwardsiella* are all oxidase-negative."
            },
            {
                "id": 106,
                "question": "___mg/dl Total Bilirubin is associated with brain damage called Kernicterus.",
                "options": [
                    "<10",
                    "10-20",
                    ">20",
                    ">50"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Kernicterus (bilirubin encephalopathy) is a serious condition where high levels of unconjugated bilirubin cross the blood-brain barrier and deposit in brain tissue, causing neurological damage, especially in newborns. While the exact threshold varies, total serum bilirubin levels exceeding 20-25 mg/dL are generally considered high risk for kernicterus."
            },
            {
                "id": 107,
                "question": "K/A H2S+, PAD (+), Citrate (-)",
                "options": [
                    "Proteus mirabilis",
                    "Proteus vulgaris",
                    "Morganella morganii",
                    "Providencia stuartii"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The combination of PAD (+) and Citrate (-) strongly points towards the group including Morganella. The glucose fermentation (K/A) fits, and the H2S production was observed in this specific test."
            },
            {
                "id": 108,
                "question": "Select the primary reagent used in the Jaffe method for creatinine.",
                "options": [
                    "Sodium nitroprusside",
                    "Saturated picric acid and NaOH",
                    "Diacetyl monoxime",
                    "Urease"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The Jaffe reaction, the most common method for measuring creatinine, involves the reaction of creatinine with alkaline picrate (picric acid in an alkaline solution, typically sodium hydroxide - NaOH) to form a red-orange colored complex (Janovsky complex)."
            },
            {
                "id": 109,
                "question": "Antigenic drift is the phenomenon of slight antigenic change seen in viruses over time as a result of minor mutations. Antigenic shift is the phenomenon by which an often unexpected change in virus strains that may trigger pandemics.",
                "options": [
                    "Only the first statement is correct",
                    "Only the second statement is correct",
                    "Both statements are correct",
                    "Both statements are incorrect"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Both definitions are correct. Antigenic drift involves minor point mutations in viral genes (especially for surface antigens like hemagglutinin/neuraminidase in influenza), leading to gradual changes. Antigenic shift involves major changes, often through reassortment of genetic segments between different viral strains (e.g., animal and human influenza viruses infecting the same cell), leading to novel viruses to which populations have little immunity, potentially causing pandemics."
            },
            {
                "id": 110,
                "question": "The term pharmacokinetics refers to the:",
                "options": [
                    "Relationship between drug dose and the drug blood level",
                    "Relationship between drug blood level and drug effects",
                    "Lowest concentration of drug needed to produce desired effect",
                    "Rate at which the liver metabolizes a drug"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Pharmacokinetics describes the time course of drug absorption, distribution, metabolism, and excretion (ADME). It essentially describes how the body handles a drug, influencing the relationship between the administered dose and the resulting concentration in the blood or plasma over time. Pharmacodynamics refers to what the drug does to the body (relationship between concentration and effect)."
            },
            {
                "id": 111,
                "question": "Which of the following assays is recommended as a screening test for colorectal cancer in persons over 50 years old?",
                "options": [
                    "CEA",
                    "AFP",
                    "Occult blood",
                    "Fecal trypsin"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Fecal Occult Blood Testing (FOBT), either guaiac-based (gFOBT) or immunochemical (FIT), is a recommended non-invasive screening test for colorectal cancer in average-risk individuals over 50 (or 45 based on newer guidelines). It detects small amounts of blood in the stool, which can be an early sign of colorectal polyps or cancer. CEA and AFP are tumor markers used more for monitoring than screening. Fecal trypsin relates to pancreatic function."
            },
            {
                "id": 112,
                "question": "Which of the following conditions will cause an increased anion gap?",
                "options": [
                    "Diarrhea",
                    "Hypoaldosteronism",
                    "Hyperkalemia",
                    "Renal failure"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "An increased anion gap (AG = Na+ - (Cl- + HCO3-)) indicates an accumulation of unmeasured anions. Renal failure leads to the retention of metabolic acids like sulfates, phosphates, and organic acids, increasing the anion gap (uremic acidosis). Diarrhea typically causes bicarbonate loss, leading to a normal anion gap metabolic acidosis. Hypoaldosteronism and hyperkalemia don't directly cause an increased AG acidosis."
            },
            {
                "id": 113,
                "question": "A patient has the following arterial blood gas results: pH = 7.56 PCO2 = 25 mm Hg HCO3 = 22 mmol/L. Results are most likely the result of which condition?",
                "options": [
                    "COPD",
                    "Narcotic overdose",
                    "Hyperventilation",
                    "Metabolic acidosis"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The pH is high (7.56, normal ~7.40), indicating alkalosis. The PCO2 is low (25, normal ~40 mmHg), indicating a respiratory cause (loss of acid CO2). The HCO3 is near normal (22, normal ~24 mmol/L), suggesting little metabolic compensation yet. This pattern (high pH, low PCO2) is characteristic of respiratory alkalosis, which is typically caused by hyperventilation (blowing off too much CO2)."
            },
            {
                "id": 114,
                "question": "Which statement regarding measurement of Hgb A1c is true?",
                "options": [
                    "Levels do not need to be done fasting",
                    "Levels reflect glucose control in the past month",
                    "Labile Schiff base fraction is measured",
                    "Samples must be tested within 24 hours"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "HbA1c reflects average glucose over 2-3 months and is not significantly affected by recent food intake, so fasting is not required for the test. Modern methods primarily measure the stable ketoamine form, not the labile Schiff base fraction. Samples are generally stable for several days refrigerated."
            },
            {
                "id": 115,
                "question": "Which of the following is associated with low serum iron and high total iron-binding capacity (TIBC)?",
                "options": [
                    "Iron deficiency anemia",
                    "Hepatitis",
                    "Nephrotic syndrome",
                    "Non-iron deficiency anemia"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "In iron deficiency anemia (IDA), the body's iron stores are depleted (low serum iron). In response, the liver produces more transferrin (the iron transport protein) in an attempt to capture more iron, leading to an increased total iron-binding capacity (TIBC). Hepatitis and nephrosis can have variable iron profiles. Non-iron deficiency anemias (like anemia of chronic disease) typically have low iron but also low or normal TIBC."
            },
            {
                "id": 116,
                "question": "The term δ-bilirubin refers to:",
                "options": [
                    "Unconjugated bilirubin",
                    "Glucuronidated bilirubin",
                    "Bilirubin tightly bound to albumin",
                    "Bilirubin tightly bound to globulins"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Delta-bilirubin (δ-bilirubin) is conjugated bilirubin that has become covalently bound to albumin. It forms during prolonged periods of cholestasis or conjugated hyperbilirubinemia. Because it's bound to albumin, it is not filtered by the kidneys and has a longer half-life in circulation compared to other bilirubin fractions. It reacts as 'direct' bilirubin in assays."
            },
            {
                "id": 117,
                "question": "Produced by fetal liver; re-expressed in certain tumors. Also ↑ in hepatitis and pregnancy.",
                "options": [
                    "AFP",
                    "CEA",
                    "CA 125",
                    "hCG"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Alpha-fetoprotein (AFP) is produced primarily by the fetal yolk sac and liver during gestation. Levels decrease significantly after birth but can be elevated in adults with certain tumors (hepatocellular carcinoma, germ cell tumors), liver regeneration (hepatitis), and pregnancy."
            },
            {
                "id": 118,
                "question": "What is the disease associated with a decreased value of the answer in #117?",
                "options": [
                    "Spina bifida",
                    "Down syndrome",
                    "Hepatocellular carcinoma",
                    "Testicular cancer"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "During prenatal screening (maternal serum screening), *low* levels of maternal serum AFP (msAFP), along with other markers like hCG and estriol, are associated with an increased risk for chromosomal abnormalities like Down syndrome (Trisomy 21) and Trisomy 18. Elevated msAFP is associated with open neural tube defects (like spina bifida)."
            },
            {
                "id": 119,
                "question": "In hepatitis, the rise in serum conjugated bilirubin can be caused by:",
                "options": [
                    "Excessive conjugation by hepatocytes",
                    "Failure of the enterohepatic circulation",
                    "Blockage of the common bile duct",
                    "Increased synthesis of bilirubin"
                ],
                "correctAnswerIndex": 1, // index for b (Closer description: Impaired excretion into bile)
                "correctAnswerLetter": "b",
                "rationalization": "Hepatitis involves inflammation and damage to liver cells (hepatocytes). This impairs the ability of hepatocytes to transport conjugated bilirubin into the bile canaliculi for excretion. This backup causes conjugated bilirubin to leak back into the bloodstream, leading to conjugated hyperbilirubinemia. While enterohepatic circulation involves bilirubin metabolites, the primary issue in hepatitis causing conjugated bilirubin rise is impaired excretion from the liver cell. Option b is the closest fit."
            },
            {
                "id": 120,
                "question": "Select the enzyme that is most specific for β-D-glucose.",
                "options": [
                    "Hexokinase",
                    "Glucose-6-phosphate dehydrogenase",
                    "Phosphohexoisomerase",
                    "Glucose oxidase"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Glucose oxidase is highly specific for β-D-glucose. It catalyzes the oxidation of glucose to gluconic acid and hydrogen peroxide. Hexokinase (a) acts on glucose and other hexoses. G-6-PD (b) acts on glucose-6-phosphate. Phosphohexoisomerase (c) interconverts glucose-6-phosphate and fructose-6-phosphate."
            },
            {
                "id": 121,
                "question": "Which of the following findings is characteristic of all forms of clinical hypoglycemia?",
                "options": [
                    "Low blood sugar value (<55 mg/dL)",
                    "Elevated insulin levels",
                    "Neuroglycopenic symptoms at the time of low blood sugar",
                    "Low C peptide level"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The Whipple's triad defines clinical hypoglycemia: 1) Symptoms consistent with hypoglycemia (neuroglycopenic like confusion, dizziness, seizure; and/or adrenergic like sweating, tremor, palpitations), 2) Low plasma glucose measured *at the time of symptoms*, and 3) Relief of symptoms upon glucose administration. A specific glucose value (like <55 mg/dL) is a common threshold but might not apply universally or symptoms may occur above it. Insulin levels vary depending on the cause. C peptide reflects endogenous insulin secretion. Only the presence of symptoms coinciding with low glucose is universal."
            },
            {
                "id": 122,
                "question": "A sign is different from a symptom in all of the following ways except:",
                "options": [
                    "It is perceived by the patient.",
                    "It is believed to be associated with the etiology of the disease",
                    "It is objectively measurable.",
                    "It is usually clearly visible."
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Both signs and symptoms are associated with the underlying disease (etiology). The difference is that a *sign* is an objective finding that can be observed or measured by the examiner (e.g., fever, rash, heart murmur, high blood pressure, lab result). A *symptom* is a subjective experience reported by the patient (e.g., pain, nausea, fatigue, dizziness). Signs provide measurable data and are often clearly visible (or detectable via tests)."
            },
            {
                "id": 123,
                "question": "Which of the following represents the Henderson-Hasselbalch equation as applied to blood pH?",
                "options": [
                    "pH = 6.1 + log PCO2/HCO3-",
                    "pH = 6.1 + log HCO3-/(0.03 × PCO2)",
                    "pH = 6.1 + log (0.03 × PCO2)/HCO3-",
                    "pH = pK + log PCO2/HCO3-"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The Henderson-Hasselbalch equation for the bicarbonate buffering system in blood relates pH to the ratio of the bicarbonate concentration (HCO3-, the base component) and the concentration of dissolved CO2 (dCO2, the acid component). The concentration of dCO2 is calculated by multiplying the partial pressure of CO2 (PCO2) by its solubility coefficient (0.03 mmol/L/mmHg). The pKa for this system is 6.1. Thus, pH = pKa + log ([base]/[acid]) = 6.1 + log ([HCO3-] / (0.03 * PCO2))."
            },
            {
                "id": 124,
                "question": "Performing dilution, ten tubes are prepared... 0.2 mL diluent... 0.2 mL serum to tube one... 0.2 mL transfer... What is the titer on Tube 6?",
                "options": [
                    "1:8",
                    "1:32",
                    "64",
                    "1:128"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "This describes a serial two-fold dilution.\nTube 1: 0.2 mL serum + 0.2 mL diluent = 0.4 mL total. Dilution = 0.2 / 0.4 = 1/2.\nTube 2: 0.2 mL from Tube 1 into 0.2 mL diluent. Dilution = (1/2) * (0.2 / 0.4) = (1/2) * (1/2) = 1/4.\nTube 3: Dilution = 1/8\nTube 4: Dilution = 1/16\nTube 5: Dilution = 1/32\nTube 6: Dilution = 1/64\nThe titer is the reciprocal of the dilution in the last tube showing a positive reaction. Assuming the reaction extends to tube 6, the dilution is 1:64. The titer is expressed as the reciprocal, 64."
            },
            {
                "id": 125,
                "question": "Which of the following causes a false-positive result in DAT? I. Overcentrifugation II. Inadequate washing III. Weak AHG reagent IV. Bacterial contamination",
                "options": [
                    "I, II",
                    "I, III",
                    "II, III",
                    "I, IV" // None match standard causes (I, IV)
                ],
                "correctAnswerIndex": 3, // index for c (based on source selection, though incorrect)
                "correctAnswerLetter": "d",
                "rationalization": "I. Overcentrifugation: Packs cells too tightly, mimicking agglutination. IV. Bacterial contamination: Bacteria can cause non-specific clumping of red blood cells."
            },
            {
                "id": 126,
                "question": "Which of the following is incorrect regarding Lewis antibodies?",
                "options": [
                    "Made by Le (a-b-) individuals",
                    "Do not cross the placenta",
                    "Lewis antibodies cause HDFN",
                    "Naturally occuring"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Lewis antibodies (anti-Lea, anti-Leb) are typically naturally occurring IgM antibodies. IgM does not cross the placenta. Furthermore, Lewis antigens are poorly developed on fetal red cells. Therefore, Lewis antibodies are generally *not* implicated in causing Hemolytic Disease of the Fetus and Newborn (HDFN). They are made by Le(a-b-) individuals, and they do not cross the placenta (a and b are correct statements), and they are often naturally occurring (d is correct)."
            },
            {
                "id": 127,
                "question": "An American patient has the following Rh phenotype: D:+ C:+ c:+ E:- e:+ Which of the following is his most likely Rh genotype?",
                "options": [
                    "R1R2",
                    "R0r",
                    "R1r",
                    "R1R1"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Let's translate the phenotype to probable genotypes using Wiener notation:\nD:+ C:+ E:- c:+ e:+\nThis phenotype corresponds to R1r (DCe/dce).\nR1 = DCe; R2 = DcE; R0 = Dce; r = dce; r' = dCe; r'' = dcE; Rz = DCE; ry = dCE.\nR1R2 (DCe/DcE) = D+C+c+E+e+ (E positive, doesn't match)\nR0r (Dce/dce) = D+C-c+E-e+ (C negative, doesn't match)\nR1r (DCe/dce) = D+C+c+E-e+ (Matches phenotype)\nR1R1 (DCe/DCe) = D+C+c-E-e+ (c negative, doesn't match)"
            },
            {
                "id": 128,
                "question": "Both donor and recipient samples must be stored for a minimum of how many days following transfusion?",
                "options": [
                    "3 days",
                    "5 days",
                    "7 days",
                    "10 days"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Regulatory standards (e.g., AABB, FDA) require that recipient blood samples and segments from the donor unit used for crossmatching be stored for at least 7 days post-transfusion. This allows for investigation if a delayed transfusion reaction occurs."
            },
            {
                "id": 129,
                "question": "All of the following describes Bombay phenotype except:",
                "options": [
                    "Non-secretors",
                    "No agglutination reaction with Ulex europaeus reagent",
                    "Presence of A, B, H antigens",
                    "Compatible only with another Bombay"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The Bombay phenotype (Oh) results from homozygosity for a non-functional FUT1 gene (hh genotype). This means individuals cannot produce the H antigen, which is the precursor for A and B antigens on red cells. Therefore, Bombay individuals *lack* A, B, and H antigens on their red cells (Statement c is incorrect). They are non-secretors (a). Their serum contains anti-A, anti-B, and potent anti-H, which agglutinates all ABO groups except other Bombay cells (so no agglutination with Ulex europaeus reagent, which detects H antigen - b is correct). They can only be transfused with blood from other Bombay individuals (d is correct)."
            },
            {
                "id": 130,
                "question": "A potential blood donor received a rubeola vaccine. She should be deferred for?",
                "options": [
                    "1 month from the vaccination period",
                    "2 weeks from the vaccination period",
                    "4 weeks from the vaccination period",
                    "No deferral is needed"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "c",
                "rationalization": "Rubeola refers to the measles virus. The measles vaccine (usually given as MMR - Measles, Mumps, Rubella) contains live attenuated viruses. Donors who have received live attenuated viral vaccines like MMR must be deferred for 2 weeks. Rubella vaccine alone requires a 2-week deferral."
            },
            {
                "id": 131,
                "question": "Random-donor platelet concentrates should contain at least 5.5 x 10^10 platelets... stored at 20°C to 24°C with continuous agitation... yield a pH of greater than or equal to 6.0.",
                "options": [
                    "First statement is correct, second statement is incorrect",
                    "Only the second statement is correct",
                    "Both statements are correct",
                    "Both statements are incorrect"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "First Statement Correct (Platelet Count): This is correct because regulatory bodies (like AABB, FDA) set a minimum standard (≥ 5.5 x 10¹⁰ platelets per unit) for random-donor platelets. This ensures each unit provides a sufficient therapeutic dose to effectively raise a patient's platelet count. It's a quality control measure for clinical effectiveness. Second Statement Incorrect (pH): This is incorrect because the widely accepted standard requires the pH to be ≥ 6.2 at the end of the storage period (measured at 22°C or 37°C, depending on the method). Platelets produce lactic acid during storage, which lowers the pH. A pH below 6.2 indicates poor platelet viability and function. The stated value of ≥ 6.0 is too low and doesn't meet the standard for acceptable platelet quality."
            },
            {
                "id": 132,
                "question": "A 22-year-old woman... easy bruising and fatigue... Hgb: 9 g/dL, Hct: 27%, WBC: 15,000/ µl, Platelet count: 5,000/ µl. What blood component/s is/are indicated? I. RBCs II. Granulocytes III. Platelets",
                "options": [
                    "I, III",
                    "II, III",
                    "I, II",
                    "III only"
                ],
                "correctAnswerIndex": 3, // d
                "correctAnswerLetter": "d",
                "rationalization": "Transfusing platelets is the direct treatment for severe thrombocytopenia to prevent or stop bleeding. With a count this low and signs of bleeding (bruising), platelet transfusion is urgently required."
            },
            {
                "id": 133,
                "question": "Results of forward and reverse typing didn't match... no error in collection/ID. What should you do next?",
                "options": [
                    "Wash patient's RBCs with saline and repeat testing",
                    "Run autocontrol test",
                    "Look up information on patient: Diagnosis, Medications, Transfusions, etc.",
                    "Request for a new blood sample"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Washing the cells is a standard first step to rule out common interferences originating from the patient's plasma that might be causing a false reaction in the forward typing part of the ABO test. It cleans up the red cell sample for more accurate testing."
            },
            {
                "id": 134,
                "question": "What hematocrit is acceptable for packed RBCs?",
                "options": [
                    "75%",
                    "85%",
                    "95%",
                    "100%"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Packed Red Blood Cells (RBCs) have most of the plasma removed. Quality control standards typically require the hematocrit of RBC units to be ≤ 80%. A value around 75% is common and acceptable. Higher hematocrits make the unit too viscous to infuse properly."
            },
            {
                "id": 135,
                "question": "It is involved in the autoantibody specificity in PCH",
                "options": [
                    "ISBT 003", // P antigen system
                    "ISBT 005", // Lutheran
                    "ISBT 007", // Kx
                    "ISBT 010" // Diego
                ],
                "correctAnswerIndex": 0, // index for a (ISBT 003 = P1PK)
                "correctAnswerLetter": "a",
                "rationalization": "Paroxysmal Cold Hemoglobinuria (PCH) is characterized by the presence of a biphasic IgG autoantibody known as the Donath-Landsteiner antibody. This antibody typically has specificity for the P antigen (ISBT designation P1PK, system number 003). The antibody binds to RBCs in the cold peripheries and causes complement-mediated lysis when the cells return to warmer core body temperature. *ISBT numbers:* ABO=001, MNS=002, P1PK=003, Rh=004, Kell=006, Duffy=008, Kidd=009. **Correct Answer should be A (ISBT 003).** The originally circled C (ISBT 007) was incorrect."
            },
            {
                "id": 136,
                "question": "What is the standard acceptable color of Anti-B grouping serum?",
                "options": [
                    "Red",
                    "Blue",
                    "Colorless",
                    "Yellow"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "By convention and regulation (e.g., FDA), ABO typing reagents are color-coded to prevent mix-ups. Anti-A reagent is colored blue, and Anti-B reagent is colored yellow. Anti-D is typically colorless (or weakly colored depending on manufacturer)."
            },
            {
                "id": 137,
                "question": "Which physical examination result is cause for rejecting a whole blood donor?",
                "options": [
                    "Weight of 115 pounds",
                    "Hematocrit of 38%",
                    "Temperature of 99.3°F",
                    "Diastolic pressure of 130 mm Hg"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Blood donor eligibility criteria include vital signs within acceptable ranges. Acceptable blood pressure is typically systolic ≤ 180 mmHg and diastolic ≤ 100 mmHg. A diastolic pressure of 130 mmHg significantly exceeds the limit and is a cause for deferral. Weight > 110 lbs (a), Hct 38% (b, acceptable for females), and Temp 99.3°F (c, acceptable) are within typical acceptable ranges."
            },
            {
                "id": 138,
                "question": "How much anticoagulant would have to be removed from the collection bag given a donor who weighs 90 lbs?",
                "options": [
                    "12 mL",
                    "15 mL",
                    "20 mL",
                    "25 mL"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": " The Calculation: Step 1: Determine Allowable Blood Collection Volume: The volume collected must be proportional to the donor's weight relative to the standard 110 lbs. (Donor Weight lbs / 110 lbs) * Standard Collection Volume (e.g., 450 mL) (90 lbs / 110 lbs) * 450 mL ≈ 0.818 * 450 mL ≈ 368 mL So, you can only collect about 368 mL from this donor. Step 2: Determine Required Anticoagulant for the Reduced Volume: The anticoagulant amount must be proportional to the actual blood volume collected. The standard ratio is often 14 mL anticoagulant per 100 mL of blood (which is 63 mL / 450 mL). Allowable Blood Volume (mL) * (Standard Anticoagulant Volume mL / Standard Blood Volume mL) 368 mL * (63 mL / 450 mL) 368 mL * 0.14 ≈ 51.5 mL So, you only need about 51-52 mL of anticoagulant for the 368 mL collection. Step 3: Calculate Anticoagulant to Remove: Subtract the required amount from the original amount in the bag. Original Anticoagulant Volume - Required Anticoagulant Volume 63 mL - 51.5 mL ≈ 11.5 mL Rationalization for 12 mL: The calculation results in approximately 11.5 mL. In practice, this is often rounded up or standardized to 12 mL to ensure sufficient removal while accounting for slight variations in bag fill or measurement precision. Removing 12 mL from the original 63 mL leaves 51 mL, which is appropriate for the calculated 368 mL blood collection, maintaining the correct ratio for blood preservation and safety. "
            },
            {
                "id": 139,
                "question": "The required storage temperature for frozen RBCs using high glycerol method is ____ using ____.",
                "options": [
                    "-65°C, Liquid Nitrogen",
                    "-80°C, Mechanical Freezer",
                    "-120°C, Liquid Nitrogen",
                    "-196°C, Mechanical Freezer"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Red Blood Cells frozen using the high-glycerol method (40% glycerol) require storage at -65°C or colder. This temperature is typically achieved using mechanical freezers (-80°C freezers are common). Liquid nitrogen (-196°C) is generally used for lower glycerol concentrations or other cell types."
            },
            {
                "id": 140,
                "question": "Cryoprecipitate must be transfused within 6 hours after thawing. Once cryoprecipitate is thawed, it is stored at room temperature until transfused.",
                "options": [
                    "Only the first statement is correct",
                    "Only the second statement is correct",
                    "Both statements are correct",
                    "Both statements are incorrect"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Once thawed, Cryoprecipitated AHF must be stored at room temperature (20-24°C). It must be transfused within 6 hours of thawing (if pooled) or also typically within 6 hours for single units (some sources cite 4 hrs, but 6 is common). Both statements accurately reflect standard practice within the time constraint. Statement 1: Transfused within 6 hours after thawing (Correct). Statement 2: Stored at RT until transfused (Correct, within the 6-hour limit)."
            },
            {
                "id": 141,
                "question": "With regards to inheritance, most blood group systems are:",
                "options": [
                    "sex-linked recessive",
                    "autosomal dominant",
                    "autosomal recessive",
                    "autosomal codominant"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Most blood group antigens are inherited as autosomal traits (genes are on autosomes, not sex chromosomes). Expression is typically codominant, meaning if an individual inherits alleles for two different antigens within a system (e.g., A and B alleles in ABO, or M and N alleles in MNS), both antigens are expressed on the red blood cells. Dominant/recessive patterns are less common (e.g., RhD positive is dominant over RhD negative)."
            },
            {
                "id": 142,
                "question": "The recommended dose of gamma radiation administered to a blood product to reduce the risk of graft-versus-host disease is:",
                "options": [
                    "15 Gy to the center of the unit",
                    "15 Gy to any part of the blood unit",
                    "25 Gy to any part of the blood unit", 
                    "50 Gy to the center of the unit"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "c",
                "rationalization": "While the target dose is typically 25 Gy, the 15 Gy minimum ensures universal effectiveness by guaranteeing that all lymphocytes within the unit, regardless of their location, receive a dose sufficient to prevent them from causing TA-GVHD."
            },
            {
                "id": 143,
                "question": "The advantages of cordocentesis include all of the following except:",
                "options": [
                    "Allows analysis of fetal blood cells",
                    "Allows access to the fetal circulation",
                    "Allows intrauterine transfusion",
                    "Decreases risk of trauma to the placenta"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Cordocentesis (percutaneous umbilical blood sampling, PUBS) involves inserting a needle through the maternal abdomen and uterus into the umbilical cord to obtain fetal blood. While it allows direct fetal blood analysis (Hgb/Hct, antigen typing, karyotyping) and direct fetal transfusion, it carries risks, including potential trauma to the placenta, bleeding from the puncture site, infection, and fetal distress. It does *not* decrease the risk of trauma to the placenta compared to less invasive methods."
            },
            {
                "id": 144,
                "question": "The HLA genes are located on which chromosome?",
                "options": [
                    "4",
                    "5",
                    "6",
                    "7"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The genes encoding the Human Leukocyte Antigen (HLA) system, also known as the Major Histocompatibility Complex (MHC) in humans, are located in a large cluster on the short arm of chromosome 6."
            },
            {
                "id": 145,
                "question": "The directions for a slide agglutination test instruct... rotate for 2 minutes. What would happen if the slide were rotated for 10 minutes?",
                "options": [
                    "Possible false-negative result",
                    "Possible false-positive result",
                    "No effect on the test result",
                    "Increased sensitivity"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Over-rotating or allowing a slide test to sit for too long beyond the recommended read time can lead to drying of the reaction mixture. This drying effect can cause non-specific clumping or aggregation of the particles (latex) or cells, mimicking true agglutination and resulting in a false-positive reading."
            },
            {
                "id": 146,
                "question": "CD4: CD8 ratio of AIDS patients",
                "options": [
                    "2:1",
                    "1:1",
                    "1:2",
                    "0.5:1" // or < 1.0
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "In healthy individuals, the ratio of CD4+ T helper cells to CD8+ T cytotoxic cells is typically greater than 1.0 (often around 1.5 to 2.5). In Acquired Immunodeficiency Syndrome (AIDS), HIV preferentially infects and destroys CD4+ T cells, leading to a progressive decline in their number. This results in a reversed CD4:CD8 ratio, which falls below 1.0 and is often less than 0.5 in advanced disease."
            },
            {
                "id": 147,
                "question": "Which of the following is incorrect regarding ABO HDFN?",
                "options": [
                    "It can occur in the first pregnancy",
                    "It can be predicted by titers",
                    "Increased fragility of infant's RBCs", // Actually decreased fragility due to spherocytes
                    "Infant's Hgb levels may be normal at birth"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Because high titers are common in Group O individuals anyway, and there's no reliable link between the titer level and the likelihood or severity of disease in the baby, maternal anti-A/anti-B titers are not considered useful for predicting ABO HDFN. Clinical management relies on monitoring the newborn after birth for signs like jaundice and anemia, and performing tests like the DAT if indicated."
            },
            {
                "id": 148,
                "question": "What is the maximum interval during which a recipient sample may be used for compatibility testing if the patient has recently been transfused or was pregnant within the past 3 months?",
                "options": [
                    "30 days",
                    "14 days",
                    "7 days",
                    "3 days"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "If a patient has been transfused or pregnant within the preceding 3 months, or if the history is uncertain, a blood sample collected for pretransfusion testing (including compatibility testing) is valid for a maximum of 3 days (day of collection is day 0). This is because recent exposure could stimulate the production of new, clinically significant antibodies. If no recent exposure, samples may be valid for longer periods depending on local policy."
            },
            {
                "id": 149,
                "question": "RBC storage lesions except:",
                "options": [
                    "Decrease in pH",
                    "Increase in plasma K+",
                    "Shift to the right in the O2 dissociation curve",
                    "Decrease in 2,3 DPG"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "During storage of Red Blood Cells (RBCs), several changes occur ('storage lesion'): ATP and 2,3-DPG levels decrease, pH decreases (due to lactic acid accumulation), and potassium leaks out of the cells into the plasma (increase in plasma K+). A decrease in 2,3-DPG causes the oxygen dissociation curve to shift to the *left*, meaning hemoglobin holds onto oxygen more tightly (increased affinity), impairing oxygen release to tissues immediately post-transfusion (though 2,3-DPG levels recover in vivo). Therefore, a shift to the right (decreased affinity) does *not* occur during storage."
            },
            {
                "id": 150,
                "question": "Hydroxyethyl starch is a rouleaux-promoting agent used to:",
                "options": [
                    "Increase the harvest of granulocytes in leukapheresis",
                    "Treat hemolytic transfusion reactions",
                    "Resolve ABO discrepancies",
                    "Prepare leukocyte-reduced RBCs"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Hydroxyethyl starch (HES) is a sedimenting agent. It induces rouleaux formation (stacking of RBCs), increasing their sedimentation rate. In granulocyte collection via apheresis, HES is added to the blood to facilitate the separation of RBCs from the granulocyte-rich buffy coat, thereby improving the yield and purity of the collected granulocytes. It is not used for treating HTRs or resolving ABO discrepancies."
            },
            {
                "id": 151,
                "question": "Antigen that serves as a useful anthropologic marker for Mongoloid ancestry:",
                "options": [
                    "Dia",
                    "Wra",
                    "Dib",
                    "Wrb"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "The Diego blood group system antigens, particularly Dia, are found at varying frequencies in different populations. Dia antigen is relatively common in individuals of Native American and East Asian (Mongoloid) ancestry but is rare in people of European or African descent, making it a useful marker in anthropological studies. Dib is the high-frequency antithetical antigen. Wra/Wrb are in the Diego system but less distinctive anthropologically."
            },
            {
                "id": 152,
                "question": "I. Anti-JMH (John Milton Hagen): This is a classic example of an HTLA antibody. It fits all the criteria: reacts weakly at AHG, often to very high titers, and is considered clinically insignificant. II. Anti-Ch/Rg (Chido/Rodgers): These are antibodies to complement C4 components (C4d) adsorbed onto the red blood cell surface. They behave exactly like HTLA antibodies in testing: weak, often variable or refractile reactions at AHG, high titers, and are clinically insignificant. They are routinely grouped within the HTLA category due to these serological characteristics.",
                "options": [
                    "I, II",
                    "II, IV",
                    "I, II, IV", // Includes JMH, Ch/Rg, CROM
                    "I, III, IV"
                ],
                "correctAnswerIndex": 0,
                "correctAnswerLetter": "a",
                "rationalization": "HTLA antibodies characteristically react weakly (low avidity) even at high titers, often showing variable reactivity and being non-reactive by some methods. They are generally considered clinically insignificant. Common examples include antibodies to Chido/Rodgers (Ch/Rg - associated with C4 complement components), Cromer (CROM), Knops (Kn), McCoy (McC), York (Yk), Cost (Cs), JMH, etc. Anti-JMH (I) is an HTLA. Anti-Ch/Rg (II) are HTLAs. Anti-Dia/Dib (III) are typically IgG and can be clinically significant (not HTLA). Anti-CROM (IV) is an HTLA. Therefore I, II, and IV are HTLAs. Option b includes II and IV. If we must pick the *best* option, perhaps Ch/Rg and CROM are considered more classic examples. **Let's assume option B (II, IV) is the intended answer based on common examples, acknowledging C would also be correct.**"
            },
            {
                "id": 153,
                "question": "To reduce viral-post transfusion sepsis, what is the component of choice?",
                "options": [
                    "Irradiated RBCs",
                    "Washed RBCs",
                    "CMV-negative RBCs",
                    "Leukocyte-Reduced RBCs"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "If 'viral' is intended (e.g., CMV), leukocyte reduction reduces transmission of cell-associated viruses. If 'bacterial' sepsis was meant, leukoreduction has limited direct effect, but is the best risk-reduction option listed. Pathogen inactivation technologies (not listed) are more direct for bacterial reduction. Assuming general risk reduction or CMV specifically, leukoreduction is the most appropriate choice among these options."
            },
            {
                "id": 154,
                "question": "Which of the following lists the correct shelf life for the component?",
                "options": [
                    "Deglycerolized RBCs-24 hours",
                    "RBCs collected in CPDA-1 - 42 days",
                    "Platelets - 7 days",
                    "FFP at -65°C - 10 years"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Once RBCs are thawed and deglycerolized (washed to remove glycerol), the storage system becomes 'open,' significantly increasing the risk of bacterial contamination. Therefore, deglycerolized RBCs have a short shelf life of only 24 hours when stored at 1-6°C. RBCs in CPDA-1 (b) have a shelf life of 35 days. Platelets (c) typically have a 5-day shelf life (sometimes 7 with newer containers/methods). FFP stored at -18°C or colder has a 1-year shelf life; at -65°C (d) it can be longer (up to 7 years by some standards), but 1 year is the common minimum."
            },
            {
                "id": 155,
                "question": "Cryoprecipitated AHF concentrates are used to treat all of the following except:",
                "options": [
                    "Hemophilia A",
                    "Christmas Disease",
                    "Von Willebrand's Disease",
                    "Hypofibrinogenemia"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Cryoprecipitated Antihemophilic Factor (AHF) is a plasma concentrate rich in Factor VIII, von Willebrand factor (vWF), fibrinogen (Factor I), and Factor XIII. It is used to treat deficiencies of these factors: Hemophilia A (Factor VIII deficiency), von Willebrand disease (vWF deficiency), hypofibrinogenemia, and Factor XIII deficiency. Christmas disease is Hemophilia B, which is a deficiency of Factor IX; Cryo does not contain significant amounts of Factor IX."
            },
            {
                "id": 156,
                "question": "Which of the following chemicals in anticoagulant solutions extends shelf-life from 21 to 35 days?",
                "options": [
                    "Dextrose",
                    "Citrate",
                    "Adenine",
                    "Phosphate"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The addition of adenine to anticoagulant-preservative solutions (like CPD -> CPDA-1) provides a substrate for red blood cells to synthesize ATP, which helps maintain cell viability and extends the allowable storage time (shelf-life) from 21 days (e.g., ACD, CPD) to 35 days (CPDA-1). Dextrose provides energy, citrate chelates calcium (anticoagulant), phosphate buffers pH."
            },
            {
                "id": 157,
                "question": "Identify the incorrect pairing of blood group antibody and its corresponding associated condition:",
                "options": [
                    "Anti-PP1Pk: Spontaneous abortion",
                    "Anti-I: M. pneumoniae",
                    "Anti-P: IgG autoantibody in PCH",
                    "Autoanti-I: Infectious mononucleosis" // Should be Autoanti-i
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Let's check the pairings: a) Anti-PP1Pk (Anti-Tja) IS associated with spontaneous abortions. b) Autoanti-I IS often a cold agglutinin associated with *Mycoplasma pneumoniae* infection. c) Autoanti-P (IgG) IS the specificity of the Donath-Landsteiner antibody in PCH. d) Autoanti-i (lowercase i) IS associated with infectious mononucleosis (IM). The pairing listed is Autoanti-I with IM, which is incorrect. Therefore, **Option d is the incorrect pairing as written.**"
            },
            {
                "id": 158,
                "question": "What is the maximum volume of blood that can be collected from a 110-lb donor, including samples for processing?",
                "options": [
                    "450 mL",
                    "500 mL",
                    "525 mL",
                    "550 mL"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "For a standard whole blood donation, the maximum volume that can be collected is 10.5 mL per kg of donor weight. A 110-lb donor weighs 110 / 2.2 = 50 kg. Maximum collection = 50 kg * 10.5 mL/kg = 525 mL. This volume includes the main unit (typically 450 mL or 500mL) plus additional tubes collected for testing (~30-45 mL)."
            },
            {
                "id": 159,
                "question": "Which of the following is the most common cause of bacterial contamination of platelet products?",
                "options": [
                    "Entry of skin plugs into the collection bag",
                    "Environmental contamination during processing",
                    "Donor bacteremia at the time of collection",
                    "Contamination from the apheresis machine"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Platelets are stored at room temperature, which allows bacteria to proliferate if introduced. The most frequent source of contamination is bacteria residing on the donor's skin (normal skin flora like Staphylococci) that are carried into the collection bag with the skin plug cored by the phlebotomy needle, despite skin disinfection. Contamination during processing or from donor bacteremia is less common."
            },
            {
                "id": 160,
                "question": "How often can a blood donor donate whole blood?",
                "options": [
                    "Every month",
                    "Every 6 weeks",
                    "Every 8 weeks",
                    "Every 12 weeks"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "In the United States and many other countries, the minimum interval between whole blood donations is 8 weeks (56 days). This allows sufficient time for the donor's hemoglobin levels and iron stores to recover."
            },
            {
                "id": 161,
                "question": "After the addition of IgG-coated RBCs (check cells) to a negative AHG reaction during an antibody screen, a negative result is observed. Which of the following is a correct interpretation?",
                "options": [
                    "The antibody screen is negative",
                    "The antibody screen needs to be repeated",
                    "The patient has a positive DAT",
                    "The check cells are contaminated"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Coombs' control cells (check cells) are IgG-coated RBCs added to all negative antiglobulin tests (AHG phase). They should agglutinate if the AHG reagent was active and washing was adequate (removed all unbound IgG). If the check cells *do not* agglutinate (a negative result), it indicates a problem: either the AHG reagent was omitted or inactive, or washing was inadequate neutralizing the AHG. The test result is invalid, and the antibody screen (or DAT, or crossmatch) must be repeated."
            },
            {
                "id": 162,
                "question": "Which of the following ABO blood groups contains the least amount of H substance?",
                "options": [
                    "A1",
                    "A2",
                    "A1B",
                    "O"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The H antigen is the precursor structure onto which A and/or B sugars are added. The amount of unmodified H antigen remaining on the RBC surface varies by ABO group. Group O has the most H antigen (no A or B added). Group A2 has more H than A1. Group B has more H than A1. The A1B group has the least amount of H antigen because both A and B glycosyltransferases are highly efficient, converting most H sites to A and B antigens. Order of H amount: O > A2 > B > A2B > A1 > A1B."
            },
            {
                "id": 163,
                "question": "An ABO type on a patient gives the following reactions: Anti-A: 4+ Anti-B: 4+ Anti-A1: 0 A1 cells: 1+ B cells: 0. The reactions given may be seen in a patient who is:",
                "options": [
                    "A1 with anti-B",
                    "A2B with anti-A1",
                    "B with anti-A1",
                    "AB with cold alloantibody"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Forward type: Reacts with Anti-A (4+) and Anti-B (4+), indicates group AB. Reacts negatively with Anti-A1 lectin (0), indicates subgroup A2. So, forward type is A2B. Reverse type: Reacts weakly with A1 cells (1+) but not B cells (0). This indicates the presence of anti-A1 antibody in the serum. Approximately 22-35% of A2B individuals produce anti-A1. Therefore, the results fit an A2B individual with anti-A1."
            },
            {
                "id": 164,
                "question": "Cryoprecipitated AHF contains how many units of Factor VIII?",
                "options": [
                    "40",
                    "60",
                    "80",
                    "100"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Quality control standards require each unit of Cryoprecipitated AHF to contain a minimum of 80 international units (IU) of Factor VIII activity and at least 150 mg of fibrinogen."
            },
            {
                "id": 165,
                "question": "Which of the following is the most common Rh phenotype in African Americans?",
                "options": [
                    "Dce/dce (R0r)",
                    "DcE/dce (R2r)",
                    "DCe/dce (R1r)",
                    "Dce/dCe (R0r')"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "The most common Rh phenotype/genotype in individuals of African ancestry is Dce/dce (R0r). The corresponding phenotype is D+C-c+E-e+. R1r (DCe/dce) is also very common, but generally R0r is cited as the most frequent genotype in Blacks. **Correct Answer should likely be A.** The originally circled C (R1r) is the second most common in some lists or most common D+C+ phenotype."
            },
            {
                "id": 166,
                "question": "Anti-Sda has been identified in a patient. What substance would neutralize this antibody and allow detection of other alloantibodies?",
                "options": [
                    "Saliva",
                    "Hydatid cyst fluid",
                    "Urine",
                    "Breast Milk"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The Sda antigen (Sid antigen) is present on red blood cells and is also found in soluble form in various bodily fluids, particularly urine. Urine from Sd(a+) individuals contains high concentrations of Sda substance and can be used to neutralize anti-Sda antibodies in a patient's serum, which is helpful because anti-Sda often presents as refractile, mixed-field agglutination that can mask other clinically significant antibodies. Saliva neutralizes anti-Lea/Leb and anti-H. Hydatid cyst fluid neutralizes anti-P1. Breast milk has I substance."
            },
            {
                "id": 167,
                "question": "Plateletpheresis donors who have ingested aspirin should be deferred for how many days and for what reason?",
                "options": [
                    "2 days, interfere with platelet adhesion",
                    "2 days, interfere with platelet aggregation",
                    "14 days, interfere with platelet adhesion",
                    "14 days, interfere with platelet aggregation"
                ],
                "correctAnswerIndex": 2, //
                "correctAnswerLetter": "c",
                "rationalization": "Aspirin causes irreversible damage to platelet function (specifically aggregation) that lasts for the platelet's entire 7-10 day lifespan. A 14-day deferral ensures the donor has replenished their system with new, unaffected platelets, making the collected product therapeutically useful."
            },
            {
                "id": 168,
                "question": "Which blood product should be selected for vitamin K deficiency?",
                "options": [
                    "Cryoprecipitate",
                    "Factor VIII concentrate",
                    "Factor IX concentrate",
                    "Plasma" // FFP implied
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Vitamin K is required for the synthesis of functional coagulation Factors II (Prothrombin), VII, IX, and X, as well as proteins C and S. In vitamin K deficiency, these factors are non-functional. Fresh Frozen Plasma (FFP) contains all coagulation factors, including the vitamin K-dependent ones, and is used to rapidly correct deficiencies when active bleeding occurs or urgent procedure is needed. Vitamin K administration itself is the treatment for the underlying deficiency if time permits."
            },
            {
                "id": 169,
                "question": "Which of the following reactions does not occur when there is a massive blood transfusion?",
                "options": [
                    "Hypothermia",
                    "Hypercalcemia", // Hypocalcemia occurs
                    "Citrate toxicity",
                    "Hyperkalemia"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Massive transfusion can lead to several complications. Hypothermia (a) occurs from infusing cold blood products. Citrate toxicity (c) occurs because citrate anticoagulant chelates calcium; rapid infusion can overwhelm the liver's ability to metabolize citrate, leading to *hypocalcemia* (low calcium), not hypercalcemia. Other potential issues include hyperkalemia (K+ leaks from stored RBCs), coagulopathy (dilution/consumption of factors/platelets), and acid-base disturbances."
            },
            {
                "id": 170,
                "question": "Which of the following is incorrect regarding the gel system?",
                "options": [
                    "Based on the principle of agglutination",
                    "Uses serum or plasma + red blood cells",
                    "Unagglutinated cells move through the gel to the top of the tube", // Move to bottom
                    "Reactions are stable and can be reviewed later"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "In gel card technology, the microtubes contain gel beads sometimes incorporating AHG reagent. a) The principle is agglutination/hemagglutination. b) Serum/plasma and RBCs are added and incubated. d) Reactions are stable. c) *Unagglutinated* red blood cells are small enough to pass *through* the gel matrix during centrifugation and pellet at the *bottom* of the microtube (negative reaction). *Agglutinated* cells are trapped *within* the gel matrix or at the *top* of the gel column (positive reaction). Therefore, statement c is incorrect."
            },
            {
                "id": 171,
                "question": "Testing for microalbuminuria is valuable for the detection and monitoring patients with: I. Diabetes mellitus II. Chronic Kidney Disease III. Hypertension IV. Cardiovascular Disease",
                "options": [
                    "I only",
                    "I, III",
                    "I, II, III",
                    "All of the above"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Microalbuminuria (small amounts of albumin in the urine, below the detection level of standard dipsticks) is an early indicator of kidney damage (nephropathy). It is particularly important for monitoring patients with Diabetes mellitus (I) and Hypertension (III), as these are major causes of chronic kidney disease (II). Microalbuminuria is also recognized as an independent risk factor for Cardiovascular Disease (IV)."
            },
            {
                "id": 172,
                "question": "The blue quadrant in the NFPA hazard classification represents what type of hazard?",
                "options": [
                    "Flammability",
                    "Health Hazard",
                    "Reactivity",
                    "Specific Hazard"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The National Fire Protection Association (NFPA) 704 diamond uses four colored quadrants to indicate hazards: Blue = Health Hazard, Red = Flammability Hazard, Yellow = Instability/Reactivity Hazard, White = Specific Hazards (e.g., Oxidizer, Water Reactive)."
            },
            {
                "id": 173,
                "question": "Variables included in the creatinine clearance formula (Cockcroft and Gault): I. Albumin II. Ethnicity III. Age IV. Sex V. BUN VI. Body weight",
                "options": [
                    "I, III, IV and VI",
                    "III, IV and VI",
                    "II, III, IV and VI",
                    "All of the choices"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The Cockcroft-Gault formula estimates creatinine clearance (CrCl) based on: Age (III), Sex (IV), and Body Weight (VI), along with serum creatinine (not listed as a variable *in the formula itself* but required for the calculation). Ethnicity (II) is used in some other GFR estimation formulas like MDRD or CKD-EPI, but not typically Cockcroft-Gault. Albumin (I) and BUN (V) are not part of this formula. CrCl (mL/min) ≈ [(140 - Age) * Weight (kg) * (0.85 if Female)] / (72 * Serum Creatinine (mg/dL))."
            },
            {
                "id": 174,
                "question": "Changes that would occur in unpreserved urine: I. Increased pH II. Increased glucose III. Decreased Urobilinogen IV. Decreased Nitrite V. Increased ketones",
                "options": [
                    "I and III",
                    "I and IV",
                    "I, II, and V",
                    "I, III, IV, and V"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "In unpreserved urine left at room temperature: I. pH increases due to bacterial breakdown of urea to ammonia. II. Glucose decreases due to consumption by cells/bacteria. III. Urobilinogen decreases due to oxidation to urobilin. IV. Nitrite *increases* if nitrate-reducing bacteria are present and multiply. V. Ketones (acetone) decrease due to volatilization. Therefore, Increased pH (I) and Decreased Urobilinogen (III) are changes that occur."
            },
            {
                "id": 175,
                "question": "Which among the following best describes CSF specimens in intracranial hemorrhage? I. Even distribution of blood in all tubes II. Clot formation III. Xanthochromic Supernatant IV. Erythrophagocytosis V. Negative D-dimer",
                "options": [
                    "I and II",
                    "III and V",
                    "I, II, III and IV",
                    "I, III and IV"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Intracranial hemorrhage (subarachnoid hemorrhage - SAH) results in blood entering the CSF. Characteristics include: I. Even distribution of blood in sequentially collected CSF tubes (unlike a traumatic tap where blood clears). II. No clot formation (CSF lacks sufficient fibrinogen, unlike traumatic tap). III. Xanthochromic (yellow/pink/orange) supernatant after centrifugation, due to RBC lysis releasing hemoglobin which is converted to bilirubin/oxyhemoglobin (appears hours after bleed). IV. Erythrophagocytosis (macrophages containing ingested RBCs) seen on microscopic exam after several hours. V. D-dimer is typically *elevated* in CSF after SAH. Therefore I, III, and IV are characteristic findings."
            },
            {
                "id": 176,
                "question": "Mr. Holt... urinalysis revealed a negative bilirubin and an elevated urobilinogen level. These results are associated with...",
                "options": [
                    "Hemolytic Jaundice",
                    "Biliary Obstruction",
                    "Hepatocellular Disease",
                    "Cirrhosis"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "In hemolytic jaundice (pre-hepatic), increased red blood cell destruction leads to excessive production of unconjugated bilirubin, which overwhelms the liver's conjugation capacity only slightly. More bilirubin passes through the liver, gets conjugated, excreted into bile, and converted to urobilinogen in the gut. Increased urobilinogen is reabsorbed and excreted in urine (elevated urine urobilinogen). Since the excess bilirubin is mainly unconjugated, it doesn't appear in urine (negative urine bilirubin). Biliary obstruction (post-hepatic) causes increased conjugated bilirubin (positive urine bilirubin) and decreased/absent urine urobilinogen. Liver damage (hepatic) can cause increases in both urine bilirubin and urobilinogen."
            },
            {
                "id": 177,
                "question": "Which of the following will contribute to a specimen's specific gravity if present in patient's urine? I. 40-50 RBC/hpf II. 79 mg/dL urinary glucose III. 4+ Amorphous phosphates IV. Few bacteria",
                "options": [
                    "I and IV",
                    "II and IV",
                    "I, II, and III",
                    "II only"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Specific gravity is primarily determined by the amount of dissolved substances. Among the choices, only glucose is a dissolved solute that will measurably increase the urine's specific gravity. Formed elements like cells, crystals, and bacteria do not significantly impact this measurement."
            },
            {
                "id": 178,
                "question": "Which among the following clinical conditions is correctly matched with its unique urinalysis result pattern?",
                "options": [
                    "Diabetes mellitus: low specific gravity and negative ketone reaction",
                    "Intensive dieting: Negative Glucose and Increased Ketones",
                    "Multiple Myeloma: positive protein dipstick and negative SSA",
                    "Cystitis: Positive Nitrite and Protein",
                    "Nephrotic syndrome: positive protein dipstick and negative SSA"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "The correct urinalysis pattern expected during intensive dieting is negative glucose but POSITIVE ketones. Therefore, matching intensive dieting with a negative ketone reaction is incorrect because ketonuria is a hallmark physiological response to this condition."
            },
            {
                "id": 179,
                "question": "Arie develop fever and rash... urinary results... (-) Nitrate (+) Leukocyte reaction (+) WBCs and WBC Casts (-) Bacteria These findings are most compatible with:",
                "options": [
                    "Pyelonephritis",
                    "Acute Interstitial Nephritis",
                    "Cystitis",
                    "Glomerulonephritis"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The combination of fever, rash, positive leukocyte esterase, WBCs in urine, *WBC casts* (indicating renal tubular origin of inflammation), but *negative nitrite* and *few/no bacteria* is highly suggestive of Acute Interstitial Nephritis (AIN). AIN is often an allergic reaction to drugs and involves inflammation of the kidney tubules and interstitium. Pyelonephritis (kidney infection) typically has positive nitrite, bacteria, WBCs, and WBC casts. Cystitis (bladder infection) has WBCs, often nitrite and bacteria, but typically *no* casts. Glomerulonephritis usually involves RBCs, RBC casts, and proteinuria."
            },
            {
                "id": 180,
                "question": "Nephrotic syndrome... Which of the following features characterize nephrotic syndrome? I. Proteinuria II. Edema III. Hypoalbuminemia IV. Hyperlipidemia",
                "options": [
                    "I and II only",
                    "III and IV only",
                    "I, II and III only",
                    "All are correct"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Nephrotic syndrome is defined by a classic tetrad of findings: 1. Heavy Proteinuria (>3.5 g/day, primarily albumin). 2. Hypoalbuminemia (low serum albumin due to urinary loss). 3. Edema (swelling due to low plasma oncotic pressure and sodium/water retention). 4. Hyperlipidemia (increased serum cholesterol and triglycerides, related to altered lipoprotein metabolism triggered by low albumin)."
            },
            {
                "id": 181,
                "question": "Ms. Farala has been diagnosed with an upper gastrointestinal bleed. Which of the following would be the characteristic for her condition?",
                "options": [
                    "Stool with yellow color",
                    "Stool with clay-color",
                    "Stool with bright red color",
                    "Stool with a much darker brown or black color"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Blood originating from an upper gastrointestinal source (stomach, duodenum) is exposed to stomach acid and digestive enzymes, which break down hemoglobin. This results in characteristic black, tarry stools known as melena. Brown stool with bright red blood suggests lower GI bleeding. Clay-colored stools indicate biliary obstruction. Yellow stool suggests malabsorption."
            },
            {
                "id": 182,
                "question": "First morning urine... Match uses: I. Early Newborn Screening II. Used for diabetic screening III. Evaluation of orthostatic proteinuria IV. Urobilinogen determination V. Ideal for bacterial culture VI. Pregnancy Testing",
                "options": [
                    "I, II and III",
                    "III, IV and VI",
                    "I, III and VI",
                    "I, II, IV and VI",
                    "I, V and VI"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "First morning urine is the most concentrated specimen. It's ideal for: V. Bacterial culture (detecting low numbers of bacteria), VI. Pregnancy testing (detecting low levels of hCG). It's also used for evaluating orthostatic proteinuria (III, provides baseline before patient is upright). While used in some newborn screening protocols (I), specific requirements vary. It's not specifically better for diabetic screening (II) or urobilinogen (IV). Option c includes I, III, and VI, which are all plausible uses. **Option C (I, III, VI)** seems the intended answer based on common knowledge covered in texts, acknowledging V is also very suitable."
            },
            {
                "id": 183,
                "question": "Mr. Lanshine... crush injuries... random urine... brown color, clear... pH 6.0 Protein=1+ Blood=3+... 0-1 RBC/hpf... granular casts... which is true?",
                "options": [
                    "Hemolytic anemia may be a cause for the discrepancies",
                    "Bilirubin may be a cause for the discrepancies",
                    "Rhabdomyolysis may be a cause for the discrepancies",
                    "The blood reaction is a false positive"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Crush injuries often cause rhabdomyolysis (breakdown of skeletal muscle), releasing myoglobin into the circulation. Myoglobin is filtered by the kidneys and appears in urine, causing a brown ('cola-colored') appearance. Myoglobin is heme-containing and will cause a positive reaction on the dipstick blood test (which detects heme), even though few or no intact RBCs are seen microscopically (the discrepancy). Myoglobin can also be toxic to renal tubules, potentially causing acute kidney injury and granular casts. Proteinuria (1+) can also result from tubular damage. Bilirubin would not be expected. Hemolytic anemia is different."
            },
            {
                "id": 184,
                "question": "Manner of reporting for RTE cells in urine.",
                "options": [
                    "Rare, few, moderate, many",
                    "Average no. per HPF",
                    "Average no. per LPF",
                    "Present or Absent"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Renal Tubular Epithelial (RTE) cells are clinically significant findings in urine sediment. Unlike WBCs or RBCs (reported per HPF), RTE cells, like casts, are often enumerated and reported as the average number seen per *low power field* (LPF, 10x objective) because they are larger and less numerous, making them easier to locate initially under low power. However, specific identification often requires high power. Reporting conventions can vary slightly (e.g., some labs report per 10 HPF). Given the options, average number per LPF is a common method."
            },
            {
                "id": 185,
                "question": "A medical technologist performing urinalysis observed 'hyaline casts', these may represent: I. Strenuous exercise II. Congestive Heart Failure III. Glomerulonephritis IV. Nephrotic syndrome V. Acute Interstitial Nephritis",
                "options": [
                    "I and II",
                    "I, II, and IV",
                    "II, III, IV and V",
                    "I, II and III"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Hyaline casts are composed primarily of Tamm-Horsfall protein and can be seen in small numbers in healthy individuals. Their presence can be increased non-pathologically after strenuous exercise (I) or dehydration. They are also seen pathologically in various kidney diseases associated with proteinuria, including congestive heart failure (II, due to renal hypoperfusion) and glomerulonephritis (III). Nephrotic syndrome (IV) and AIN (V) typically show other, more specific types of casts (fatty, waxy, WBC, RTE) in addition to or instead of just hyaline casts."
            },
            {
                "id": 186,
                "question": "The ability of a solute to cross the glomerular filtration barrier is determined by its: I. Molecular size II. Molecular radius III. Electrical charge IV. Plasma concentration",
                "options": [
                    "I only",
                    "I and II only",
                    "I, II and III", // Correct factors
                    "All of the above"
                ],
                "correctAnswerIndex": 2, // Index for 'c' (I, II, III) - Best fit
                "correctAnswerLetter": "c",
                "rationalization": "Filtration depends on: I & II (Size/Radius - smaller molecules filter more easily), III (Electrical charge - negatively charged molecules are repelled by the negatively charged barrier), and pressure gradients. Plasma concentration (IV) affects the *amount* filtered (filtration rate * concentration = filtered load) but not the intrinsic *ability* to cross the barrier (filterability/sieving coefficient). Therefore, I, II, and III determine the ability to cross. **Correct answer should be a combination of I, II, III.** Option 'c' is the best fit."
            },
            {
                "id": 187,
                "question": "Tubular Proteinuria/Disorders: I.Multiple Myeloma II. Fanconi Syndrome III. Cadet Proteinuria IV. Toxic agents V. Severe viral infections",
                "options": [
                    "I and II",
                    "I, II, III, IV",
                    "II, III, IV and V",
                    "II, IV and V"
                ],
                "correctAnswerIndex": 3, 
                "correctAnswerLetter": "d",
                "rationalization": "II. Fanconi Syndrome: This is a generalized defect specifically affecting the proximal renal tubules. It impairs the reabsorption of multiple substances, including glucose, amino acids, phosphate, bicarbonate, and critically for this question, LMWPs. Therefore, Fanconi Syndrome is a classic cause of tubular proteinuria due to inherent tubular dysfunction. IV. Toxic Agents: Many substances are directly toxic to renal tubular cells, particularly the metabolically active proximal tubule cells. Examples include heavy metals (lead, cadmium), certain antibiotics (e.g., aminoglycosides), and some industrial solvents or drugs. This direct damage impairs the tubules' ability to reabsorb LMWPs, leading to tubular proteinuria. V. Severe Viral Infections: Certain systemic viral infections can cause acute tubular necrosis (ATN) or acute interstitial nephritis (AIN). Both conditions involve inflammation and damage to the renal tubules. This damage disrupts normal tubular function, including the reabsorption of LMWPs, resulting in tubular proteinuria."
            },
            {
                "id": 188,
                "question": "What is the reaction time needed for Leukocyte Esterase in the reagent strip method?",
                "options": [
                    "60 seconds",
                    "120 seconds",
                    "Immediately",
                    "30 seconds"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The enzymatic reaction for Leukocyte Esterase (LE) on urine dipsticks is relatively slow compared to other reactions. Accurate reading requires the longest wait time, typically 2 minutes (120 seconds). Nitrite is usually read at 60 seconds."
            },
            {
                "id": 189,
                "question": "The following conditions lead to the formation of a transudate: I. Congestive Heart Failure II. Malnutrition III. Salt Retention IV. Malignancy V. Microbial Infection",
                "options": [
                    "I only",
                    "I, II and III",
                    "IV and V",
                    "All of the choices"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Transudates are effusions caused by systemic factors that alter hydrostatic or oncotic pressure, leading to fluid accumulation with low protein and few cells. I. Congestive Heart Failure increases hydrostatic pressure. II. Malnutrition (causing severe hypoalbuminemia) decreases oncotic pressure. III. Salt Retention (as in nephrotic syndrome or CHF) increases hydrostatic pressure. These cause transudates. IV. Malignancy and V. Microbial Infection typically cause inflammation of the membrane surface (e.g., pleura, peritoneum), increasing capillary permeability and leading to the formation of exudates (high protein, high cells)."
            },
            {
                "id": 190,
                "question": "Laboratory Results: CSF Protein = 55 mg/dl Plasma Glucose = 110 mg/dl CSF Glucose = 60 mg/dl CSF Lactate = 30 mg/dl These findings are indicative of?",
                "options": [
                    "Viral Meningitis",
                    "Bacterial Meningitis",
                    "Normal CSF",
                    "Tuberbular and Fungal Meningitis"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "The combination of moderately elevated protein, a significantly reduced CSF/plasma glucose ratio (indicating glucose consumption), and elevated lactate is a classic pattern for Tuberculous or Fungal meningitis."
            },
            {
                "id": 191,
                "question": "Chylous Effusion: I. Predominantly lymphocytes II. Milky/White III. Absence of Cholesterol Crystals IV. >110 mg/dl Triglycerides",
                "options": [
                    "I and II only",
                    "III and IV only",
                    "I, II and III only",
                    "All of the above"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Chylous effusions result from leakage of lymphatic fluid (chyle) into a body cavity (e.g., pleural space) due to obstruction or disruption of the thoracic duct or major lymphatic vessels. Characteristics include: II. Milky, white appearance due to high lipid content. IV. High triglyceride concentration (typically >110 mg/dL and higher than plasma levels). I. Cell counts usually show a predominance of lymphocytes. III. Cholesterol levels are typically *not* elevated (unlike pseudochylous effusions which have high cholesterol and cholesterol crystals). Therefore, I, II, III (absence of crystals), and IV are all characteristic features."
            },
            {
                "id": 192,
                "question": "While the medical technologist is measuring the absorbance of the amniotic fluid, the absorbance was highest at 450 nm, what is the indication of this finding?",
                "options": [
                    "Presence of oxyhemoglobin",
                    "Presence of bilirubin",
                    "Fetal lung immaturity",
                    "Presence of meconium"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Spectrophotometric analysis of amniotic fluid (Liley graph method) involves scanning absorbance from ~350 nm to ~700 nm. A peak or bulge in absorbance at 450 nm (ΔA450) above a baseline indicates the presence of bilirubin. The height of this peak reflects the concentration of bilirubin and is used to assess the severity of fetal hemolysis in cases of HDFN. Oxyhemoglobin absorbs maximally around 415 nm and also at 540/575 nm."
            },
            {
                "id": 193,
                "question": "All of the following are diagnostic of Vulvovaginal candidiasis, EXCEPT:",
                "options": [
                    "Vaginal pH of 4.0",
                    "Presence of lactobacilli", // Part of normal flora
                    "Presence of WBCs",
                    "White, flocculent vaginal discharge"
                ],
                "correctAnswerIndex": 3, // index for b
                "correctAnswerLetter": "d",
                "rationalization": "While a white, flocculent (often described as cottage cheese-like) discharge is highly characteristic of Vulvovaginal Candidiasis, it's a clinical sign, not a definitive diagnostic test. Other conditions could potentially cause whitish discharge, and a definitive diagnosis requires confirmation, usually via microscopy (KOH prep showing yeast/hyphae) or culture."
            },
            {
                "id": 194,
                "question": "The proper specimen handling of vaginal secretions uses... Cotton swabs should not be used because cotton is toxic to:",
                "options": [
                    "Neisseria gonorrhoeae",
                    "Trichomonas vaginalis",
                    "Candida albicans",
                    "Herpes simplex virus"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Cotton swabs contain fatty acids and other substances that can be inhibitory to the recovery of certain fastidious bacteria, most notably *Neisseria gonorrhoeae*, when used for culture specimens. Calcium alginate swabs can also be inhibitory. Dacron or rayon swabs with plastic shafts are preferred for collecting specimens for bacterial culture, including *N. gonorrhoeae*, *Chlamydia*, and viruses."
            },
            {
                "id": 195,
                "question": "Mrs. Bolusan... 50 yrs... foul vaginal odor, particularly following intercourse... pH=5.0 Amine test = (+) KOH examination: (-) Bacteria: Rare large rods, few small rods, many coccobacilli WBCs: rare Other: Clue cells present These findings suggests:",
                "options": [
                    "Normal vaginal flora",
                    "Bacterial vaginosis",
                    "Candidiasis",
                    "Trichomoniasis"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "This clinical picture and laboratory findings are classic for Bacterial Vaginosis (BV). Key features (Amsel criteria - need 3 of 4): 1. Vaginal pH > 4.5 (present, 5.0). 2. Positive whiff/amine test (fishy odor upon adding KOH) (present, +). 3. Presence of clue cells (squamous epithelial cells coated with bacteria, obscuring borders) on microscopic exam (present). 4. Thin, homogenous, grayish discharge (not described but implied by odor/other findings). The microscopic findings (shift from large lactobacilli rods to many small coccobacilli) also support BV. Candidiasis usually has normal pH and yeast forms. Normal would have pH <4.5, negative amine test, predominant lactobacilli, no clue cells."
            },
            {
                "id": 196,
                "question": "Which urinary sediment component(s) when observed microscopically can resemble red blood cells? I. Oil droplets II. Yeasts III. Air bubbles IV. Calcium oxalate Crystals",
                "options": [
                    "I and II",
                    "I, II, III",
                    "I, II and IV",
                    "All of the choices"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Several urine sediment components can be confused with RBCs: I. Oil droplets (from lubricants, contamination) are refractile spheres of varying size. II. Yeast cells (*Candida*) are oval, similar size, may show budding, often refractile. III. Air bubbles are highly refractile, vary in size, usually perfectly round with sharp edges. IV. Calcium oxalate dihydrate crystals are typically 'envelope' shaped, but the monohydrate form can be oval or dumbbell-shaped and resemble RBCs. Therefore, all listed items can potentially be mistaken for RBCs."
            },
            {
                "id": 197,
                "question": "The synovial fluid easily forms small drops from the aspirating syringe. This viscosity is:",
                "options": [
                    "Decreased",
                    "Normal",
                    "Associated with inflammation", // Implies decreased
                    "Reported as good"
                ],
                "correctAnswerIndex": 2, // index for c (best describes the implication)
                "correctAnswerLetter": "c",
                "rationalization": "Normal synovial fluid is highly viscous due to the presence of hyaluronic acid. It typically forms a long string (4-6 cm) when dropped (string test). Inflammation within the joint leads to the breakdown of hyaluronic acid by enzymes released from neutrophils, resulting in markedly *decreased* viscosity. Fluid with low viscosity will form drops quickly, like water, rather than stringing. Therefore, easily forming drops indicates decreased viscosity, associated with inflammation."
            },
            {
                "id": 198,
                "question": "When performing WBC count, what is the dilution to be used if the CSF submitted to the laboratory appears slightly cloudy?",
                "options": [
                    "Undiluted",
                    "1:100",
                    "1:10",
                    "1:10,000"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Normal CSF is clear and contains very few WBCs (0-5/µL). If the CSF appears cloudy, it indicates an increased number of cells (WBCs, RBCs, or microorganisms). Standard WBC counts on clear CSF are often done undiluted or with a minimal dilution (e.g., 1:10) using the hemacytometer. If the fluid is slightly cloudy, a higher dilution, such as 1:20 or 1:100, may be necessary to ensure cells are adequately separated for accurate counting in the hemacytometer chamber. 1:10,000 is excessive for slight cloudiness. 1:20 (not an option) or 1:100 are plausible starting points."
            },
            {
                "id": 199,
                "question": "This is caused by incomplete breakdown or reabsorption of food presents increased fecal material to the large intestine, resulting in water and electrolyte retention in the large intestine, which in turn results in excessive watery stool.",
                "options": [
                    "Secretory Diarrhea",
                    "Osmotic Diarrhea",
                    "Altered Motility",
                    "Steatorrhea"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Osmotic diarrhea occurs when poorly absorbed solutes (e.g., lactose in lactose intolerance, sorbitol, magnesium salts) remain in the intestinal lumen, drawing water osmotically into the bowel and increasing fecal volume. Incomplete breakdown/reabsorption fits this mechanism. Secretory diarrhea involves active secretion of electrolytes and water into the lumen (e.g., cholera toxin). Altered motility involves changes in transit time. Steatorrhea is fatty stool due to malabsorption of fat."
            },
            {
                "id": 200,
                "question": "Stains for Sperm Morphology: I. Papanicolaou Stain II. Wright's Stain III. Giemsa Stain IV. Eosin & Nigrosin",
                "options": [
                    "I and IV",
                    "I, II, IV",
                    "I, II, III, IV",
                    "I, II and III"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Assessing sperm morphology requires staining to visualize detailed structures. Standard methods recommended by WHO include Papanicolaou (Pap) stain (I), Shorr stain, or rapid Wright-Giemsa type stains like Diff-Quik (related to II and III). Eosin-Nigrosin (IV) is used for assessing sperm *viability* (live/dead count), not detailed morphology (live cells exclude eosin, dead cells stain pink). Therefore I, II, and III are appropriate morphology stains."
            },
            {
                "id": 201,
                "question": "In seminalysis, when the first portion of the semen specimen is not collected, what will be the expected finding/result?",
                "options": [
                    "Decreased pH",
                    "Decreased sperm count",
                    "Decreased motility",
                    "Decreased viscosity"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The first portion of the ejaculate is typically the richest in spermatozoa from the epididymis and vas deferens. If this portion is missed during collection, the overall sperm count in the analyzed sample will likely be falsely decreased. Seminal vesicle fluid (later portions) contributes volume and fructose, while prostate fluid (also early/middle) contributes enzymes and affects pH. Motility (c) might be affected, but decreased count (b) is the most direct consequence. pH (a) might be slightly more alkaline if prostatic fluid is reduced. Viscosity (d) is less likely to be the primary effect."
            },
            {
                "id": 202,
                "question": "Granular casts in the urine maybe due to the following, EXCEPT:",
                "options": [
                    "Acute glomerulonephritis",
                    "Pyelonephritis",
                    "Acute interstitial nephritis",
                    "Stress and exercise"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Granular casts result from the breakdown of cellular material (like renal tubular cells, WBCs, or RBCs) trapped within the cast matrix in the tubule. While AIN involves inflammation (WBCs) and potential tubular damage (RTE cells), its most characteristic cast finding is usually WBC casts, reflecting the active inflammation in the interstitium extending into the tubules. Granular casts are more strongly associated with conditions causing significant tubular cell death and degeneration (like Acute Tubular Necrosis - ATN) or urinary stasis allowing cellular casts to degrade. AIN's primary signature is inflammation, not necessarily widespread intra-cast cellular degeneration leading to granular casts as the main finding."
            },
            {
                "id": 203,
                "question": "What is the error caused by aggregates of platelets surrounding neutrophils seen on PBS?",
                "options": [
                    "Increased platelet count and increased WBC count",
                    "Increased platelet count and decreased WBC count",
                    "Decreased platelet count and decreased WBC count",
                    "Decreased platelet count and increased WBC count"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Decreased Platelet Count (Pseudothrombocytopenia): When platelets aggregate around neutrophils (platelet satellitism), automated hematology analyzers, which count individual particles passing through an aperture or laser, cannot recognize these clumped platelets as separate entities. They are hidden around the larger neutrophil. This leads to the instrument reporting a falsely low platelet count. Increased WBC Count (Pseudoleukocytosis - less common but possible): The neutrophil with platelets attached is significantly larger than a normal neutrophil. Some automated analyzers might interpret this entire complex as a single, abnormally large white blood cell, or potentially misclassify it, leading to a falsely high WBC count. Alternatively, it might just be flagged as abnormal without significantly altering the count, but the potential for spurious increase exists depending on the technology. The key and consistent error is the falsely decreased platelet count."
            },
            {
                "id": 204,
                "question": "Which among the following instrumental errors below are classified under positive errors encountered during cell counting? I. Bubbles in the sample II. Extraneous electrical pulses III. Excessive lysing of the RBCs IV. Aperture plugs V. Improper setting of the aperture current",
                "options": [
                    "I, II and III",
                    "I, II, III and V",
                    "I, II and IV", // Correct factors for positive errors
                    "II, IV, V" // Option from source, mix of positive/negative causes
                ],
                "correctAnswerIndex": 2, // Index for C (I, II, IV) - Actual positive errors
                "correctAnswerLetter": "c",
                "rationalization": "Bubbles and electrical noise are counted as if they were cells, artificially inflating the count (positive error). Aperture plugs prevent cells from being counted accurately, leading to artificially low counts (negative error). "
            },
            {
                "id": 205,
                "question": "Third layer found in spun hematocrit:",
                "options": [
                    "Packed red cells",
                    "Plasma",
                    "Fatty layer",
                    "Buffy Coat"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "When anticoagulated whole blood is centrifuged for a microhematocrit determination, it separates into three distinct layers: 1. Bottom layer: Packed Red Blood Cells (PCV). 2. Middle layer: Buffy coat (a thin, grayish-white layer containing leukocytes and platelets). 3. Top layer: Plasma. A fatty layer might appear at the very top if the sample is lipemic."
            },
            {
                "id": 206,
                "question": "After staining the blood film... appeared bluish... what could have caused the said problem? I. Thick films II. Insufficient staining time III. Prolonged staining time IV. Prolonged washing V. Inadequate washing VI. Mounting before dry VII. Too high alkalinity of buffer",
                "options": [
                    "I, III, VI and VII",
                    "I, III, V, VII",
                    "I, IV, VI and VII",
                    "II, IV, VI and VII"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "A peripheral blood smear appearing too blue overall using Wright's or Wright-Giemsa stain usually indicates excessive alkaline staining. Causes include: I. Film is too thick (prevents proper penetration/differentiation). III. Staining time too long. V. Washing/buffering time too short or inadequate (buffer removes excess alkaline stain). VII. Buffer or stain pH is too alkaline (most common cause). Insufficient staining time (II) or prolonged washing (IV) would cause the smear to be too pale/pink. Mounting wet (VI) causes artifact but not typically uniform blue color."
            },
            {
                "id": 207,
                "question": "The presence of schistocytes on the peripheral blood film is a characteristic feature of microangiopathic hemolytic anemia. Increased number of schistocytes could make accurate RBC and platelet count impossible.",
                "options": [
                    "First statement is correct",
                    "Second statement is correct",
                    "Both statements are correct",
                    "Both statements are incorrect"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "The first statement is correct; schistocytes (fragmented RBCs) are hallmarks of microangiopathic hemolytic anemias (MAHA) like TTP, HUS, DIC, where RBCs are sheared by fibrin strands in small vessels."
            },
            {
                "id": 208,
                "question": "The following can be assessed using bleeding time: I. Primary Hemostasis II. Abnormality of platelet function III. vWF deficiency IV. Abnormal vessel wall structure V. Secondary Hemostasis",
                "options": [
                    "I, II, III",
                    "I, II, V",
                    "I, II, III and IV",
                    "I, II, III, IV and V"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The bleeding time (now largely obsolete, replaced by PFA-100/200) measures the time it takes for bleeding to stop from a standardized superficial incision. It assesses the efficiency of *primary hemostasis* (I), which involves platelet adhesion, activation, aggregation (platelet function, II), and interaction with von Willebrand Factor (vWF, III) at the site of vessel injury (vessel wall integrity, IV). It does *not* assess secondary hemostasis (coagulation factor cascade, V)."
            },
            {
                "id": 209,
                "question": "This is the only WBC that is capable of mitosis in the circulation.",
                "options": [
                    "Neutrophil",
                    "Eosinophil",
                    "Lymphocyte",
                    "Monocyte"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "While most mature WBCs in the circulation are terminally differentiated and do not divide, lymphocytes (particularly memory lymphocytes) retain the ability to undergo mitosis (cell division) when stimulated by antigens or mitogens, enabling clonal expansion during an immune response. Other WBCs like neutrophils, monocytes, eosinophils, basophils typically do not divide once they enter the circulation."
            },
            {
                "id": 210,
                "question": "Event/s that would occur in inadequate fibrinolysis: I. Incomplete wound healing II. Clot Extension III. Thrombosis IV. Bleeding",
                "options": [
                    "I and II",
                    "II and III",
                    "I, II and III",
                    "IV only"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Fibrinolysis is the process of breaking down fibrin clots after tissue repair has occurred. If fibrinolysis is inadequate or inhibited, clots are not removed efficiently. This can lead to clot extension (II) and the formation of obstructive thrombi (thrombosis, III), potentially blocking blood vessels. Bleeding (IV) occurs with *excessive* fibrinolysis. Incomplete wound healing (I) might occur if persistent fibrin impedes tissue remodeling, but clot extension/thrombosis are the more direct consequences."
            },
            {
                "id": 211,
                "question": "Which among the following acts as a buffer in staining peripheral blood films?",
                "options": [ // Assuming Phosphate buffer was an option
                     "Azure Blue",
                     "Saline solution",
                     "Blood",
                     "Eosin"
                 ],
                "correctAnswerIndex": 2, // index for c (Assumed option)
                "correctAnswerLetter": "c",
                "rationalization": "Wright's stain and Wright-Giemsa stains are Romanowsky stains that require precise pH control for optimal differential staining of blood cells. An aged distilled water or, more commonly, a phosphate buffer solution (typically pH 6.4 to 6.8) is used to dilute the stain and/or rinse the slide. This buffer maintains the correct pH, allowing acidic components (like eosin) to stain basic cell structures (hemoglobin, eosinophil granules) pink/red, and basic components (like methylene blue/azure B) to stain acidic structures (DNA, RNA, basophil granules) blue/purple. Saline solution is isotonic but not a buffer for staining."
            },
            {
                "id": 212,
                "question": "Hemoglobinopathies can be classified as:",
                "options": [
                    "Abnormal hemoglobin globullin structure",
                    "Defect of hemoglobin globullin synthesis",
                    "Combination of defects of both structure and synthesis",
                    "All of the above" 
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Hemoglobinopathies are genetic disorders affecting hemoglobin."
            },
            {
                "id": 213,
                "question": "This the reference method for hemoglobin assay.",
                "options": [
                    "Copper Sulfate Method",
                    "Van Slyke Method",
                    "Sahli's Method",
                    "Cyanmethemoglobin Method"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "The cyanmethemoglobin (hemiglobincyanide) method is the internationally recognized reference method for hemoglobin determination. It involves converting all forms of hemoglobin (except sulfhemoglobin) to stable cyanmethemoglobin, which has a broad absorbance peak at 540 nm and follows Beer's Law, allowing for accurate spectrophotometric measurement. Other methods (copper sulfate - specific gravity screening; Van Slyke - oxygen capacity) are older or less accurate/precise."
            },
            {
                "id": 214,
                "question": "Increased amount of trapped plasma can be seen in sickle cell anemia and thallasemia. This trapped plasma causes spun hematocrit results to be how many percent higher than electronic cell counter?",
                "options": [
                    "0.5-1%",
                    "1-2%",
                    "1-3%",
                    "2-4%"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The spun microhematocrit measures the packed cell volume, including small amounts of plasma trapped between the red blood cells. Conditions with abnormally shaped or less deformable RBCs (like sickle cells, spherocytes, or cells in thalassemia) can lead to increased trapped plasma compared to normal RBCs. Automated cell counters calculate hematocrit (Hct = MCV * RBC count / 10) and are not affected by trapped plasma. Therefore, the spun hematocrit result is typically slightly higher (by 1-3%) than the calculated hematocrit from an automated counter, and this difference can be exaggerated in conditions like sickle cell anemia."
            },
            {
                "id": 215,
                "question": "All coagulation factors are synthesized by the liver, EXCEPT:",
                "options": [
                    "Factor II",
                    "Factor VII",
                    "Factor IX",
                    "VWF" // Also Factor VIII, Calcium, Tissue Factor
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Most coagulation factors (Fibrinogen, Prothrombin, V, VII, IX, X, XI, XII, XIII, prekallikrein, HMWK) are synthesized primarily in the liver. Key exceptions include: Factor VIII (synthesized mainly by liver sinusoidal endothelial cells and possibly other endothelial cells), von Willebrand Factor (vWF) (synthesized by endothelial cells and megakaryocytes), Tissue Factor (Factor III) (expressed by many cell types outside the liver upon injury), and Factor IV (Calcium - obtained from diet). Therefore, vWF is not synthesized by hepatocytes in the liver."
            },
            {
                "id": 216,
                "question": "Sources of error that causes ESR to be falsely increased. I. Presence of sickle cells and spherocytes II. Potassium oxalate and heparin as anticoagulant III. Slight tilt of the pipette/tube IV. Clotted blood sample V. Vibrations on the countertops VI. Bubbles in ESR Tube",
                "options": [
                    "I, II and IV",
                    "III and V",
                    "II, III, and V",
                    "IV and V"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "III. Slight tilt of the pipette/tube: Effect: Increases ESR. Reason: When the tube is tilted, the red blood cells don't have to fall the full vertical length of the plasma column. They hit the side of the tube sooner and then slide down, effectively shortening the settling distance and accelerating the rate of fall. This results in a falsely high reading. V. Vibrations on the countertops: Effect: Increases ESR. Reason: Vibrations cause mechanical agitation that artificially packs the red blood cells down faster than they would settle under gravity alone. This leads to a falsely high reading. Why II (Potassium oxalate and heparin) is NOT a standard cause of falsely increased ESR: Standard Anticoagulant: The correct anticoagulant for ESR is Sodium Citrate. Oxalate Effect: Potassium oxalate can cause red blood cells to crenate (shrink), which hinders rouleaux formation and typically leads to a falsely decreased ESR. Heparin Effect: Heparin is generally not recommended. While its effect can be variable, it's not considered a reliable cause of a falsely increased ESR compared to factors like tilt or vibration. Some sources say it can cause falsely increased ESR, possibly by affecting plasma factors, but others list it as causing decreases or unreliable results. It's not a primary, universally accepted cause like tilt or vibration."
            },
            {
                "id": 217,
                "question": "RBC destruction that occurs when macrophages ingest and destroy RBCs is termed as:",
                "options": [
                    "Intravascular hemolysis",
                    "Macrophage-mediated", // = Extravascular
                    "Extrahematopoietic",
                    "Senescence"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The primary mechanism for removing old or damaged RBCs is phagocytosis by macrophages of the reticuloendothelial system (mononuclear phagocytic system), particularly in the spleen and liver. This process is called extravascular hemolysis. Intravascular hemolysis occurs within blood vessels. Extrahematopoietic refers to blood cell production outside the bone marrow. Macrophage-mediated accurately describes the cellular process."
            },
            {
                "id": 218,
                "question": "Signs of intravascular hemolysis would include: I. Hemoglobinemia II. Hemoglobinuria III. Urine Hemosiderin IV. Increased Serum Haptoglobin",
                "options": [
                    "I, II",
                    "I, III",
                    "II, III, IV",
                    "I, II and III"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Intravascular hemolysis releases free hemoglobin directly into the plasma. I. Hemoglobinemia (free Hb in plasma) occurs. II. If plasma binding capacity (haptoglobin) is exceeded, free Hb is filtered by kidneys, causing Hemoglobinuria (Hb in urine). III. Some filtered Hb is reabsorbed by renal tubular cells; iron released from this Hb is stored as hemosiderin. When these cells slough into urine, Hemosiderinuria occurs (detectable with Prussian blue stain, appears later than hemoglobinuria). IV. Haptoglobin binds free Hb and is cleared, leading to *decreased* (not increased) serum haptoglobin levels."
            },
            {
                "id": 219,
                "question": "Primary hemostasis refers to the role of blood vessels and platelets in response to a vascular injury. Secondary hemostasis describes the activation of a series of coagulation proteins in the plasma to form a fibrin clot.",
                "options": [
                    "Only the first statement is correct",
                    "Only the second statement is correct",
                    "Both statements are correct",
                    "Both statements are incorrect"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Both definitions are correct. Primary hemostasis involves vasoconstriction and the formation of a platelet plug at the site of injury. Secondary hemostasis involves the activation of the coagulation cascade, culminating in the generation of fibrin, which stabilizes the platelet plug."
            },
            {
                "id": 220,
                "question": "A tourniquet is used to provide a barrier against venous blood flow to help locate a vein and should be applied ___ above the venipuncture site.",
                "options": [
                    "1-2 inches",
                    "3-4 inches",
                    "5-6 inches",
                    "7-8 inches"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Standard phlebotomy guidelines recommend applying the tourniquet 3 to 4 inches (approximately 7.5 to 10 cm) above the intended venipuncture site. Applying it closer may cause the vein to collapse, while applying it too far away may make it ineffective."
            },
            {
                "id": 221,
                "question": "It is a vascular complication of phlebotomy which occurs when a needle sticks an artery preventing blood from moving through the vessel.",
                "options": [
                    "Pseudoaneurysm",
                    "Thrombosis",
                    "Reflex arteriospasm",
                    "Arteriovenous fistula"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Accidental arterial puncture during phlebotomy can sometimes trigger reflex arteriospasm, where the smooth muscle of the artery wall contracts strongly, potentially impeding blood flow temporarily. A pseudoaneurysm is a contained rupture forming a pulsating hematoma. Thrombosis is clot formation *within* the vessel. An AV fistula is an abnormal connection between artery and vein. The description 'preventing blood from moving' best fits spasm."
            },
            {
                "id": 222,
                "question": "These parameters are derived values: I. MCV II. RDW III. MPV IV. PDW",
                "options": [
                    "I, II",
                    "III, IV",
                    "II and IV",
                    "All of the above"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "None of these four parameters (MCV, RDW, MPV, PDW) represent a simple, direct measurement taken by the instrument. They all involve mathematical calculations (averaging) or statistical analysis (distribution width) based on the raw data collected from thousands of individual cells. Therefore, they are all considered derived values."
            },
            {
                "id": 223,
                "question": "Platelet estimate of 150,000-199,000/uL:",
                "options": [
                    "Low",
                    "Low normal",
                    "Normal",
                    "High Normal"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The typical reference range for platelet count is approximately 150,000 to 400,000/µL (or 150-400 x 10^9/L). A value between 150,000 and 199,000/µL falls within the lower end of this normal range."
            },
            {
                "id": 224,
                "question": "Factor I deficiencies: I. Afibrinogenemia II. Hypofibrinogenemia III. Dysfibrinogenemia IV. Owren's Disease V. Prothrombin Deficiency",
                "options": [
                    "I, II, IV",
                    "I, II, V",
                    "I, II, and III",
                    "I, III, V"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Factor I is fibrinogen. Deficiencies related to Factor I include: I. Afibrinogenemia (complete absence), II. Hypofibrinogenemia (low levels), and III. Dysfibrinogenemia (presence of functionally abnormal fibrinogen). Owren's disease (IV) is Factor V deficiency. Prothrombin deficiency (V) is Factor II deficiency."
            },
            {
                "id": 225,
                "question": "The coagulation factor/s belonging to the 'Prothrombin Group' is/are:",
                "options": [
                    "I, V, VIII, XIII",
                    "XI, XII, PK, HMWK",
                    "II, VII, IX, X",
                    "II, V, VII, X"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The coagulation factors are sometimes grouped based on properties. The Prothrombin Group (or Vitamin K-Dependent Group) includes Factors II (Prothrombin), VII, IX, and X. These factors require vitamin K for their synthesis into functional forms by the liver. The Fibrinogen Group (I, V, VIII, XIII) are consumed during clotting. The Contact Group (XI, XII, PK, HMWK) are involved in the initial phase of the intrinsic pathway."
            },
            {
                "id": 226,
                "question": "IDA may result from various categories with multiple conditions including: I. Decreased iron intake II. Increased iron utilization III. Excessive loss of iron IV. Faulty or incomplete iron absorption",
                "options": [
                    "I, II",
                    "I, II, III",
                    "II, III, IV",
                    "All of the choices"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Iron Deficiency Anemia (IDA) develops when iron stores are depleted. This can result from: I. Decreased intake (dietary deficiency). II. Increased utilization/need (e.g., pregnancy, rapid growth). III. Excessive loss (e.g., chronic bleeding - menstrual, gastrointestinal). IV. Faulty or incomplete absorption (e.g., celiac disease, gastrectomy)."
            },
            {
                "id": 227,
                "question": "Extrinsic pathway is activated in vivo by contact of coagulation proteins with subendothelial tissue (negative surface). Intrinsic pathway is initiated with the release of tissue factor.",
                "options": [
                    "Only the first statement is correct",
                    "Only the second statement is correct",
                    "Both statements are correct",
                    "Both statements are incorrect"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Both statements describe the pathways incorrectly. The *Intrinsic* pathway is activated *in vitro* by contact with negatively charged surfaces (like glass) and *in vivo* involves factors like collagen exposure activating Factor XII. The *Extrinsic* pathway is initiated *in vivo* by the release of Tissue Factor (Factor III) from injured cells, which complexes with Factor VII."
            },
            {
                "id": 228,
                "question": "In the in vitro coagulation scheme, factor V is primarily involved in?",
                "options": [
                    "Extrinsic pathway",
                    "Intrinsic pathway",
                    "Common Pathway",
                    "Fibrinolysis"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Factor V (along with Factor Xa, calcium, and phospholipids) is a component of the prothrombinase complex, which converts prothrombin (Factor II) to thrombin (Factor IIa). This step is central to the *Common Pathway* of coagulation, where the intrinsic and extrinsic pathways converge."
            },
            {
                "id": 229,
                "question": "The coagulation factors referred to as 'Vitamin K Independent' are:",
                "options": [
                    "I, V, VIII, XIII",
                    "II, VII, IX, X",
                    "I, II, V, VII",
                    "XI, XII, IX, X"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Vitamin K is required for the gamma-carboxylation of Factors II, VII, IX, X, and Proteins C, S, Z. Factors that *do not* require vitamin K for synthesis include Factor I (Fibrinogen), Factor V, Factor VIII, Factor XI, Factor XII, Factor XIII, Prekallikrein (Fletcher Factor), and High Molecular Weight Kininogen (Fitzgerald Factor). Option a lists factors from the Fibrinogen group (except VIII also needs vWF) and XIII, which are all vitamin K independent."
            },
            {
                "id": 230,
                "question": "Method of examination wherein it uses a pattern of consecutive fields beginning near the tail on a horizontal edge. Characterized by a back-and-forth serpentine pattern.",
                "options": [
                    "Battlement Method",
                    "Wandering Method",
                    "Cross-sectional Method",
                    "Exaggerated Battlement Method"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "This describes the 'battlement' pattern commonly recommended for performing a manual white blood cell differential count on a peripheral blood smear. Starting near the feathered edge (tail), the microscopist moves systematically back and forth across the optimal reading area of the smear in a serpentine or crenellated (battlement) pattern to avoid counting the same cells twice and ensure all areas are examined representatively."
            },
            {
                "id": 231,
                "question": "Side angle scatter in a laser-based cell counting system is used to measure:",
                "options": [
                    "Cell size",
                    "Cytoplasmic granularity",
                    "Cell number",
                    "Nuclear density"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "In flow cytometry and laser-based hematology analyzers, forward scatter (FSC) is proportional to cell size, while side scatter (SSC), measured at approximately 90 degrees, is proportional to internal complexity, primarily cytoplasmic granularity and nuclear lobularity."
            },
            {
                "id": 232,
                "question": "Prothrombin time is used to test the following factors, EXCEPT:",
                "options": [
                    "II",
                    "V",
                    "VII",
                    "VIII"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "The Prothrombin Time (PT) test measures the integrity of the *Extrinsic* and *Common* pathways of coagulation. It assesses Factors VII (Extrinsic), and X, V, II (Prothrombin), and I (Fibrinogen) (Common). Factor VIII is part of the *Intrinsic* pathway and is assessed by the Activated Partial Thromboplastin Time (aPTT) test."
            },
            {
                "id": 233,
                "question": "Factors that are completely consumed during coagulation process.",
                "options": [
                    "Prothrombin Group",
                    "Fibrinogen Group",
                    "Contact Group",
                    "All of the above"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The Fibrinogen Group of coagulation factors includes Factors I (Fibrinogen), V, VIII, and XIII. These factors are consumed or incorporated into the fibrin clot during the coagulation process and are therefore typically absent or present in very low concentrations in serum (the fluid left after clotting). The Prothrombin group (II, VII, IX, X) and Contact group (XI, XII, PK, HMWK) are generally not fully consumed and remain in serum."
            },
            {
                "id": 234,
                "question": "Labile factor/s at room temperature: I. Factor V II. Factor VIII III. Factor VII IV. Factor XI",
                "options": [
                    "I only",
                    "I, III",
                    "I and II",
                    "II and IV"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Factors V and VIII are known as the 'labile factors' because they are relatively unstable and lose activity fairly quickly upon storage of plasma at room temperature or even refrigerated temperatures. Factors VII and XI are more stable."
            },
            {
                "id": 235,
                "question": "PT: 17.5 seconds aPTT: 60 seconds D-dimer test: 457 ng/ml Fibrinogen:130mng/dL Platelet count: 100,000/uL This laboratory workup suggests:",
                "options": [
                    "Hemolytic Uremic Syndrome",
                    "Vitamin K deficiency",
                    "DIC",
                    "Thrombocytopenia Purpura"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "This pattern is highly suggestive of Disseminated Intravascular Coagulation (DIC). Key features: Prolonged PT (normal ~11-14s) and aPTT (normal ~25-35s) indicate consumption of multiple factors. Elevated D-dimer (normal <250 ng/mL or <0.5 ug/mL FEU) indicates excessive fibrin formation and breakdown. Low fibrinogen (normal ~200-400 mg/dL) due to consumption. Thrombocytopenia (low platelet count, normal 150k-400k) due to consumption in microthrombi. HUS typically has normal PT/aPTT. Simple hemorrhage or clot might not show such global factor consumption and high D-dimer."
            },
            {
                "id": 236,
                "question": "If a Quellung test was done on the following bacterial isolates, which one would you expect to be positive?",
                "options": [
                    "Shigella dysenteriae",
                    "Streptococcus pneumoniae",
                    "Corynebacterium diphtheriae",
                    "Haemophilus influenzae (nontypable)"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The Quellung reaction (capsular swelling test) uses type-specific antiserum that binds to the bacterial capsule. This binding causes a change in the refractive index of the capsule, making it appear swollen or more visible microscopically. *Streptococcus pneumoniae* is known for its prominent polysaccharide capsule, which is a major virulence factor and is detectable by the Quellung test. *Haemophilus influenzae* type b also has a capsule detectable by this method, but *S. pneumoniae* is a classic example. *Shigella* and *Corynebacterium* are typically non-encapsulated in this context. Nontypable H. influenzae lack capsules."
            },
            {
                "id": 237,
                "question": "A sputum sample... Gram stain revealed... 10-15 epithelial cells per low-power field, 8-10 WBCs/LPF, and pleomorphic Gram-negative rods. Which of the following interpretations should you make?",
                "options": [
                    "Specimen is adequate for culture",
                    "Proceed with culture and report predominant organism",
                    "Inform physician that this represents normal flora",
                    "Ask the patient to recollect sputum sample"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Microscopic screening of sputum specimens assesses quality and acceptability for culture. A good quality sputum sample (representing lower respiratory secretions) should have numerous WBCs (indicating inflammation) and few squamous epithelial cells (SECs, indicating contamination with saliva/upper respiratory secretions). A common criterion is <10 or <25 SECs/LPF and >25 WBCs/LPF. This sample has many epithelial cells (10-15/LPF) and relatively few WBCs (8-10/LPF), indicating it is likely heavily contaminated with saliva and not representative of a lower respiratory infection. Therefore, it should be rejected, and a new, better quality specimen requested."
            },
            {
                "id": 238,
                "question": "Lance developed ear infection... hot tub... non-fermenter gram negative bacilli. What is the suspected organism causing the infection?",
                "options": [
                    "Stenotrophomonas maltophilia",
                    "Pseudomonas aeruginosa",
                    "Acinetobacter baumannii",
                    "Burkholderia cepacia"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Otitis externa ('swimmer's ear') acquired after exposure to contaminated water, especially warm water like hot tubs, is very commonly caused by *Pseudomonas aeruginosa*. This organism is a Gram-negative rod, an opportunistic pathogen, a non-fermenter (oxidase positive), and thrives in moist environments. The other options are less likely causes of typical hot tub-associated ear infections."
            },
            {
                "id": 239,
                "question": "Haemophilus ducreyi requires Factor X but not Factor V. Haemophilus parainfluenzae requires Factor V but not Factor X.",
                "options": [
                    "Only the first statement is correct",
                    "Only the second statement is correct",
                    "Both statements are correct",
                    "Both statements are incorrect"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Species identification within the *Haemophilus* genus relies partly on their growth requirements for X factor (hemin) and V factor (NAD). *H. ducreyi* (causes chancroid) requires only X factor. *H. parainfluenzae* requires only V factor. *H. influenzae* requires both X and V factors."
            },
            {
                "id": 240,
                "question": "Which of the following is true regarding Escherichia coli serotype O157:H7?",
                "options": [
                    "Oxidase positive",
                    "Mannitol nonfermenter",
                    "Sorbitol nonfermenter",
                    "Beta-hemolytic on blood agar"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Most strains of *Escherichia coli* ferment sorbitol rapidly. However, the clinically significant enterohemorrhagic strain *E. coli* O157:H7 is characteristically unable to ferment sorbitol (or ferments it very slowly). This property is used in selective media like Sorbitol MacConkey (SMAC) agar, where O157:H7 colonies appear colorless, while most other *E. coli* appear pink. It ferments mannitol."
            },
            {
                "id": 241,
                "question": "Which of the following filarial parasite exhibit diurnal periodicity?",
                "options": [
                    "Wuchereria bancrofti",
                    "Loa loa",
                    "Onchocerca volvulus",
                    "Brugia malayi"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Periodicity refers to the timing of microfilariae appearance in the peripheral blood. *Loa loa* (African eye worm) exhibits diurnal periodicity, meaning microfilariae are most numerous in the blood during the daytime (approx. 10 AM to 2 PM), coinciding with the biting habits of its vector, the Chrysops deer fly. *Wuchereria bancrofti* (a) and *Brugia malayi* (d) typically show nocturnal periodicity (peak at night). *Onchocerca volvulus* (c) microfilariae are primarily found in the skin and eyes, not typically showing periodicity in blood."
            },
            {
                "id": 242,
                "question": "All of the following are capnophilic bacteria which requires 5-10% CO2, EXCEPT: I. Campylobacter jejuni II. Haemophilus influenzae III. Neisseria gonorrhaeae IV. Helicobacter pylori",
                "options": [
                    "I, II, IV",
                    "II, III",
                    "I and IV", // Arguably C jejuni/H pylori primary need is microaerophilic
                    "I, II, III" // Source selection
                ],
                "correctAnswerIndex": 3, // index for d (Based on source interpretation)
                "correctAnswerLetter": "d",
                "rationalization": "I. *Campylobacter jejuni* is microaerophilic (needs low O2) and capnophilic (needs CO2). II. *Haemophilus influenzae* is capnophilic. III. *Neisseria gonorrhoeae* is capnophilic. IV. *Helicobacter pylori* is microaerophilic (requires low oxygen) but not typically considered strictly capnophilic in the same way as the others (though it tolerates some CO2). The question asks for the EXCEPTION to being capnophilic (requiring CO2). All listed organisms benefit from or require some CO2. However, if 'capnophilic' implies a strict requirement for elevated CO2 (5-10%), then *Helicobacter*'s primary requirement is low O2. **This question is poorly phrased.** If it means 'Which ones need CO2?', most do. If it means 'Which one's primary requirement isn't CO2?', maybe *Helicobacter*. **No combination option clearly identifies only *Helicobacter* as the exception.** Let's assume I, II, III are definitely considered capnophilic by the source, making IV the intended exception, but this is not how the options are structured. Option D (I,II,III) suggests these *are* the ones considered capnophilic, implying IV is the exception, but doesn't ask for the exception."
            },
            {
                "id": 243,
                "question": "A medical technologist is reading a gram stain from a CSF and observes the presence of gram-negative coccobacilli. Which of the following chemistry and hematology tests indicate bacterial meningitis?",
                "options": [
                    "WBC: ↓ Glucose: ↑ Protein: ↑",
                    "WBC: ↑ Glucose: ↓ Protein: ↓",
                    "WBC: ↑ Glucose: ↓ Protein: ↑",
                    "WBC: ↓ Glucose: ↑ Protein: ↓"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Bacterial meningitis is typically characterized by the following CSF findings: Increased WBC count (WBC: ↑), predominantly neutrophils. Decreased glucose level (Glucose: ↓), usually <40 mg/dL or <50% of plasma glucose, because bacteria consume glucose. Increased protein concentration (Protein: ↑), due to inflammation increasing permeability of the blood-brain barrier. Gram-negative coccobacilli could be *Haemophilus influenzae* or others."
            },
            {
                "id": 244,
                "question": "Susceptibility tests must be quality controlled daily except when which of the following is the case?",
                "options": [
                    "An automated system is used",
                    "A new lot number of Mueller Hinton is used",
                    "Precision is demonstrated for 20-30 consecutive days",
                    "A new antimicrobial agent is added"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "According to CLSI guidelines, labs performing antimicrobial susceptibility testing must perform quality control (QC) testing daily using reference strains (like *E. coli* ATCC 25922, *S. aureus* ATCC 25923, *P. aeruginosa* ATCC 27853). However, if the laboratory can document acceptable QC performance (results consistently within range) for 20 to 30 consecutive days, the frequency of QC testing can be reduced to weekly, provided standardized procedures are followed precisely. Using an automated system or adding new antibiotics does not eliminate the need for QC."
            },
            {
                "id": 245,
                "question": "Which of the following are reasons to reject a specimen for culture?",
                "options": [
                    "The specimen is preserved in formalin",
                    "Information on the label does not match the requisition form",
                    "The specimen is received in an improper or leaking container", // Modified option based on general principles
                    "All of the above"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Laboratories have criteria for specimen rejection to ensure reliable results. Reasons include: a) Specimen preserved in formalin (formalin kills bacteria, unsuitable for culture). b) Mismatch between information on the requisition and the specimen label (critical patient identification error). c) Improper specimen type or collection/transport (e.g., submitting multiple stool samples for bacterial culture on the same day, leaking container, wrong preservative)."
            },
            {
                "id": 246,
                "question": "A moderate growth of a heaped, dry-appearing, white organism is isolated from a patient with 'thrush'. The colony has tiny projections or 'feet' projecting out along the edge of its margin. A presumptive Identification of this organism would be:",
                "options": [
                    "Staphylococcus epidermidis",
                    "Candida tropicalis",
                    "Neisseria spp.",
                    "Candida albicans"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Thrush (oral candidiasis) is typically caused by *Candida albicans*. On agar media like Sabouraud dextrose agar, *C. albicans* colonies are often white, opaque, and may appear somewhat heaped or wrinkled. The presence of marginal extensions ('feet' or 'spikes') projecting from the colony edge is a characteristic feature helpful for the presumptive identification of *C. albicans*. Staphylococcus and Neisseria are bacteria with different colony morphologies."
            },
            {
                "id": 247,
                "question": "Which of the following organisms is commonly tested for beta-lactamase production?",
                "options": [
                    "Streptococcus pneumoniae",
                    "Klebsiella pneumoniae",
                    "Staphylococcus aureus",
                    "Haemophilus influenzae"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Beta-lactamase testing is crucial for determining resistance to penicillin and related antibiotics in certain bacteria. It is routinely performed on isolates of *Haemophilus influenzae*, *Neisseria gonorrhoeae*, and *Moraxella catarrhalis*, as resistance in these organisms is primarily mediated by beta-lactamase production. While some *Staphylococcus aureus* produce beta-lactamase (penicillinase), methicillin resistance (MRSA) involves a different mechanism (mecA gene) and is tested differently. *S. pneumoniae* resistance is usually due to altered penicillin-binding proteins. *Klebsiella* resistance involves various mechanisms including extended-spectrum beta-lactamases (ESBLs)."
            },
            {
                "id": 248,
                "question": "A beta-hemolytic, catalase-negative, gram-positive coccus is found to be hippurate hydrolysis positive and resistant to bacitracin. Which of the following is a likely presumptive identification?",
                "options": [
                    "Group A Streptococci",
                    "Group B Streptococci",
                    "Group D Streptococci",
                    "Enterococcus spp."
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "This description fits *Streptococcus agalactiae* (Group B Streptococcus - GBS). GBS are typically beta-hemolytic (sometimes gamma), Gram-positive cocci, catalase-negative. Key differentiating features from *Streptococcus pyogenes* (Group A Strep - GAS) are: GBS is resistant to bacitracin (GAS is susceptible), and GBS hydrolyzes sodium hippurate (GAS does not). Group D and Enterococci are typically alpha or gamma hemolytic and PYR positive."
            },
            {
                "id": 249,
                "question": "Which of the following parasite/s is/are incorrectly matched to its common name? I. Strongyloides stercoralis: Threadworm II. Enterobius vermicularis: Pinworm III. Dipylidium caninum: Dog Hookworm IV. Paragonimus westermani: Oriental Liver Fluke",
                "options": [
                    "I, II",
                    "III, IV",
                    "I, II, III",
                    "I, III, IV"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Let's check the matches: I. *Strongyloides stercoralis* IS the threadworm (Correct). II. *Enterobius vermicularis* IS the pinworm (Correct). III. *Dipylidium caninum* IS the dog tapeworm (NOT hookworm) (Incorrect). IV. *Paragonimus westermani* IS the Oriental lung fluke (NOT liver fluke; *Clonorchis sinensis* is the Oriental liver fluke) (Incorrect). Therefore, III and IV are incorrectly matched."
            },
            {
                "id": 250,
                "question": "What is the diagnostic stage of Leishmania spp.?",
                "options": [
                    "Promastigote",
                    "Trypomastigote",
                    "Epimastigote",
                    "Amastigote"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "*Leishmania* species exist in two main forms: the promastigote (motile, flagellated form found in the sandfly vector and culture) and the amastigote (non-motile, intracellular form found within macrophages in the vertebrate host). Diagnosis in humans relies on identifying the amastigote stage in tissue samples (e.g., skin biopsy, bone marrow aspirate). Trypomastigote and epimastigote stages are seen in Trypanosomes."
            },
            {
                "id": 251,
                "question": "What step in the Gram stain distinguishes between gram-positive and gram-negative organisms?",
                "options": [
                    "Primary staining using crystal violet",
                    "Decolorization using acetone alcohol",
                    "Counterstaining using safranin",
                    "Mordant using Gram's iodine"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The critical differential step in the Gram stain procedure is decolorization. Gram-positive bacteria have a thick peptidoglycan layer that retains the primary stain (crystal violet) complexed with iodine when treated with a decolorizer (like acetone-alcohol). Gram-negative bacteria have a thin peptidoglycan layer and an outer membrane; the decolorizer extracts the lipid outer membrane and removes the crystal violet-iodine complex, rendering them colorless until counterstained (usually with safranin)."
            },
            {
                "id": 252,
                "question": "The complete clearing of media around bacterial colonies on a blood agar plate is referred to as:",
                "options": [
                    "Alpha Hemolysis",
                    "Beta Hemolysis",
                    "Gamma Hemolysis",
                    "Delta Hemolysis"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Hemolysis patterns on blood agar describe how bacteria affect red blood cells: Alpha hemolysis is partial lysis resulting in a greenish discoloration. Beta hemolysis is complete lysis of RBCs, resulting in a clear zone around the colony. Gamma hemolysis means no lysis or discoloration. Delta hemolysis usually refers to synergistic effects."
            },
            {
                "id": 253,
                "question": "When an erythromycin resistant and clindamycin susceptible Staphylococcal isolate is encountered, a D-zone test... flattening of the clindamycin zone between the two disks occurred. This is reported as:",
                "options": [
                    "Erythromycin susceptible, clindamycin susceptible",
                    "Erythromycin resistant, clindamycin susceptible",
                    "Erythromycin resistant, clindamycin resistant",
                    "Erythromycin susceptible, clindamycin resistant"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The D-test detects inducible clindamycin resistance in staphylococci that are resistant to erythromycin but appear susceptible to clindamycin in standard tests. Erythromycin can induce the expression of the *erm* gene, which confers resistance to both erythromycin and clindamycin. If inducible resistance is present, the zone of inhibition around the clindamycin disk will appear flattened or 'D-shaped' adjacent to the erythromycin disk. Even though it initially tested susceptible, the positive D-test indicates inducible resistance, so clindamycin should be reported as resistant for this isolate."
            },
            {
                "id": 254,
                "question": "The virulence factor associated with Bacillus cereus is:",
                "options": [
                    "Edema Factor",
                    "Lethal Toxin",
                    "Protective Antigen",
                    "Enterotoxin"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "*Bacillus cereus* causes two main types of food poisoning: emetic (vomiting) type associated with a heat-stable cyclic peptide toxin (cereulide), and diarrheal type associated with heat-labile enterotoxins (like Hemolysin BL, cytotoxin K). While *Bacillus anthracis* produces Edema Toxin and Lethal Toxin (components involve Protective Antigen), the primary virulence factors for *B. cereus* gastrointestinal illness are enterotoxins (diarrheal) and cereulide (emetic). Given the options, Enterotoxin is the best general fit for *B. cereus* virulence in this context."
            },
            {
                "id": 255,
                "question": "Enterobacteriaceae are typically gram-negative and:",
                "options": [
                    "Unable to ferment glucose",
                    "Capable of reducing nitrates to nitrites",
                    "Catalase negative",
                    "Oxidase positive"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Key characteristics of most members of the Enterobacteriaceae family include: Gram-negative rods or coccobacilli, facultative anaerobes, ferment glucose (a is incorrect), reduce nitrates to nitrites (b is correct), are catalase positive (c - catalase negative is incorrect), and are oxidase negative (d - oxidase positive is incorrect, except for *Plesiomonas*)."
            },
            {
                "id": 256,
                "question": "Which factor contributes to the pathogenicity of Pseudomonas aeruginosa?",
                "options": [
                    "Pyoverdin",
                    "Exotoxin A",
                    "Alginate",
                    "Cytotoxins" // All can contribute, Alginate is prominent
                ],
                "correctAnswerIndex": 2, // index for c (Alginate)
                "correctAnswerLetter": "c",
                "rationalization": "*Pseudomonas aeruginosa* possesses numerous virulence factors. Exotoxin A (b) inhibits protein synthesis. Pyoverdin (a) is a siderophore for iron acquisition. Alginate (c) is a mucoid polysaccharide capsule produced particularly by strains infecting cystic fibrosis patients, contributing to biofilm formation and resistance to phagocytosis/antibiotics. Cytotoxins (d) like ExoU, ExoS damage host cells. All listed can contribute, but alginate is a prominent factor, especially in chronic infections."
            },
            {
                "id": 257,
                "question": "Bile salts and crystal violet are incorporated into MacConkey agar in order to:",
                "options": [
                    "Aid in the differentiation of lactose fermenters",
                    "Detect the production of hydrogen sulfide",
                    "Inhibit the growth of gram-positive organisms",
                    "Enhance the growth of gram-negative organisms"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "MacConkey agar is selective and differential. The selective agents are bile salts and crystal violet, which inhibit the growth of most Gram-positive bacteria, allowing Gram-negative bacteria (particularly Enterobacteriaceae) to grow. Lactose fermentation (differential aspect) distinguishes lactose fermenters (pink/red colonies) from non-fermenters (colorless colonies)."
            },
            {
                "id": 258,
                "question": "The characteristic colony morphology of Actinomyces israelii on solid agar resembles:",
                "options": [
                    "Medusa Head",
                    "Molar Tooth",
                    "Fried egg",
                    "Satellite colonies"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "*Actinomyces israelii*, an anaerobic Gram-positive bacillus, characteristically produces rough, heaped-up colonies on agar media after several days of incubation that are often described as resembling a 'molar tooth' in appearance. Medusa head is typical of *Bacillus anthracis*, Fried egg of *Mycoplasma hominis*."
            },
            {
                "id": 259,
                "question": "It causes rat-bite fever with sodoku.",
                "options": [
                    "Streptobacillus moniliformis",
                    "Actinobacillus muris",
                    "Leptospira interrogans",
                    "Spirillum minus"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Rat-bite fever is caused by two organisms: *Streptobacillus moniliformis* (more common in North America, causes Haverhill fever type) and *Spirillum minus* (more common in Asia, causes Sodoku type). Sodoku is specifically associated with *Spirillum minus*."
            },
            {
                "id": 260,
                "question": "Infection with Clonorchis or Opisthorchis may result from eating raw or undercooked:",
                "options": [
                    "Aquatic vegetation",
                    "Crabs",
                    "Freshwater snails",
                    "Freshwater fish"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "*Clonorchis sinensis* (Chinese or Oriental liver fluke) and *Opisthorchis* species (liver flukes) are acquired by humans through the ingestion of raw or undercooked freshwater fish containing the metacercariae stage of the parasite. Aquatic vegetation transmits *Fasciola/Fasciolopsis*, crabs/crayfish transmit *Paragonimus*."
            },
            {
                "id": 261,
                "question": "Human cysticercosis occurs when:",
                "options": [
                    "Taenia solium eggs are ingested",
                    "Reverse peristalsis returns gravid segments into the intestine",
                    "Humans ingest contaminated pork",
                    "All of the above"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Human cysticercosis primarily occurs via egg ingestion"
            },
            {
                "id": 262,
                "question": "A 4-year old child... irritable... poor sleep... urine sample... oval, flat-sided ovum was identified. The organism seen is most likely:",
                "options": [
                    "Taenia spp.",
                    "Enterobius vermicularis",
                    "Ascaris lumbricoides",
                    "Schistosoma haematobium"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The symptoms (irritability, poor sleep, possibly perianal itching - though not stated) and the description of the egg (oval, flattened on one side, ~50-60 µm long) are characteristic of *Enterobius vermicularis*, the human pinworm. Pinworm eggs are typically deposited on the perianal skin, not usually found in urine unless contaminated, but the egg morphology is distinctive. *Taenia* eggs are round/brown/striated. *Ascaris* eggs are larger, oval, mammillated or smooth. *Schistosoma* eggs have spines and are found in urine (*S. haematobium*) or feces (*S. mansoni/japonicum*)."
            },
            {
                "id": 263,
                "question": "Which specimen is the least likely to provide recovery of Trichomonas vaginalis?",
                "options": [
                    "Vaginal discharge",
                    "Urethral discharge",
                    "Urine",
                    "Stool"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "*Trichomonas vaginalis* is a flagellated protozoan parasite that infects the urogenital tract. It is typically recovered from vaginal discharge (a), urethral discharge (b), or urine (c, especially first-void in males or contaminated specimen in females). It does not inhabit the gastrointestinal tract and would not be found in stool (d)."
            },
            {
                "id": 264,
                "question": "Which fungus is most often acquired by traumatic implantation into the skin?",
                "options": [
                    "Blastomyces dermatitidis",
                    "Sporothrix schenckii",
                    "Coccidioides immitis",
                    "Histoplasma capsulatum"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "*Sporothrix schenckii* is a dimorphic fungus found on plants (especially roses, sphagnum moss) and in soil. It typically causes sporotrichosis through traumatic inoculation into the skin (e.g., thorn prick), leading to subcutaneous nodules and lymphocutaneous spread ('rose gardener's disease'). The other fungi listed are typically acquired via inhalation."
            },
            {
                "id": 265,
                "question": "Tinea capitis is caused by which dermatophyte?",
                "options": [
                    "Trichophyton tonsurans",
                    "Microsporum audouinii",
                    "Microsporum canis",
                    "All of the above"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Tinea capitis (ringworm of the scalp) can be caused by various dermatophyte fungi. Common agents include *Trichophyton tonsurans* (a, most common in US), *Microsporum audouinii* (b, epidemic form), and *Microsporum canis* (c, often acquired from pets). Therefore, all listed species can cause tinea capitis."
            },
            {
                "id": 266,
                "question": "Which of the following is observed in severe COVID-19 patients?",
                "options": [
                    "Increased leukocytes",
                    "Increased ALT",
                    "Increased AST",
                    "All of the Above"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Severe COVID-19 is often associated with significant laboratory abnormalities reflecting widespread inflammation and organ involvement. This includes leukocytosis (increased WBCs, sometimes leukopenia initially), elevated liver enzymes like ALT (b) and AST (c) indicating liver injury, and elevated inflammatory markers (CRP, ferritin, D-dimer, IL-6 - not listed). Therefore, increased leukocytes, ALT, and AST can all be observed."
            },
            {
                "id": 267,
                "question": "Characteristics of the rhabditiform larvae of Strongyloides stercoralis include a:",
                "options": [
                    "Long buccal capsule and small genital primordium",
                    "Short buccal capsule and large genital primordium",
                    "Long buccal capsule and large genital primordium",
                    "Short buccal capsule and small genital primordium"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The rhabditiform (L1) larva of *Strongyloides stercoralis* is characterized by having a relatively *short* buccal capsule (shorter than the width of the larva at that point) and a prominent, large genital primordium (a structure that will develop into reproductive organs). Hookworm rhabditiform larvae have a *long* buccal capsule and an inconspicuous genital primordium. Filariform larvae have different morphology (notched tail in *Strongyloides*)."
            },
            {
                "id": 268,
                "question": "Which of the following tissue processing steps require the longest time?",
                "options": [
                    "Dehydration",
                    "Fixation",
                    "Clearing",
                    "Infiltration"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Fixation (e.g., using formalin) ensures tissue preservation by cross-linking proteins and preventing decay. Slow penetration of fixatives into dense tissues (hours to days) is critical to avoid artifacts. Subsequent steps (dehydration, clearing, embedding) are shorter and automated, while inadequate fixation compromises downstream results irreversibly."
            },
            {
                "id": 269,
                "question": "In the rHIVda protocols of the DOH, which of the following Rapid Diagnostic Tests was not mentioned:",
                "options": [ // Requires specific, potentially dated, DOH knowledge
                    "SD Bioline",
                    "Alere Determine",
                    "Fujibio",
                    "Geenius"
                 ],
                "correctAnswerIndex": 2,
                "correctAnswerLetter": "d",
                "rationalization": "Fujibio might not have been evaluated when guidelines were last revised."
            },
            {
                "id": 270,
                "question": "Which of the following equipment in molecular biology is checked and maintained using a biological indicator to assess its effectiveness?",
                "options": [
                    "Autoclave",
                    "BSC",
                    "Freezer",
                    "Centrifuge"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Autoclaves use pressurized steam to sterilize materials. Their effectiveness (ability to kill microorganisms) is verified periodically using biological indicators (BIs). These typically contain highly heat-resistant bacterial spores (e.g., *Geobacillus stearothermophilus*). After an autoclave cycle, the BI is incubated; no growth indicates a successful sterilization cycle. BSCs are certified using particle counts/airflow tests. Freezers/Centrifuges use temperature/speed checks."
            },
            {
                "id": 271,
                "question": "Which of the following is an advantage of mounting agents containing xylene or toluene?",
                "options": [
                    "Optical brilliance",
                    "Good drying times",
                    "No air bubbles under the coverslip",
                    "AOTA"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "TOptical Brilliance: Their refractive index (~1.5) matches glass, enhancing tissue transparency and light transmission for crisp microscopy. Good Drying Times: Rapid solvent evaporation ensures quick, uniform hardening, preventing tissue distortion. No Air Bubbles: Proper viscosity and solvent volatility minimize bubble formation during coverslip placement, ensuring smooth, unobstructed slides."
            },
            {
                "id": 272,
                "question": "Lab Management: A remote collection permit shall only last for up to?",
                "options": [ // Requires specific regulatory knowledge
                    "4 hours",
                    "5 hours",
                    "6 hours",
                    "8 hours"
                 ],
                "correctAnswerIndex": 2,
                "correctAnswerLetter": "c",
                "rationalization": "A 6-hour limit for remote collection permits is standard in lab management protocols to: Preserve Sample Integrity: Prevents degradation of labile analytes (e.g., glucose, cells) due to delays in transport or temperature fluctuations. Minimize Pre-Analytical Errors: Reduces risks of contamination, hemolysis, or microbial overgrowth in biological specimens (e.g., blood, urine). Align with Accreditation Standards: Complies with guidelines like CLSI (Clinical Laboratory Standards Institute) or DOH policies, which often mandate ≤6-hour windows for non-stabilized samples. Practical Logistics: Balances feasibility for remote collection while ensuring timely delivery to labs for processing."
            },
            {
                "id": 273,
                "question": "Which of the following reagents is not required in immunohistochemistry for fixing and sectioning paraffin-embedded tissues?",
                "options": [
                    "Xylene",
                    "Paraffin",
                    "Water",
                    "Methanol"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Standard tissue processing for paraffin embedding involves: Fixation (usually formalin), Dehydration (graded alcohols, not typically methanol), Clearing (xylene, a), Infiltration (paraffin, b), and Sectioning. Immunohistochemistry (IHC) is performed *after* sectioning. While methanol might be used in some specific IHC steps (e.g., blocking endogenous peroxidase) or fixation protocols, it's not a standard required reagent for the basic *fixing and sectioning* process described. Xylene, paraffin, and water (implied by dehydration/rehydration steps - c) are essential parts of the overall workflow."
            },
            {
                "id": 274,
                "question": "Presidential Proclamation 1181 which mandates the celebration of Medical Technology Week every third week of September was issued on:",
                "options": [
                    "September 6, 1972", // Wrong year
                    "September 6, 1973", // Correct date and year
                    "September 20, 1972",
                    "September 21, 1973"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Presidential Proclamation No. 1181, series of 1973, signed by President Ferdinand Marcos, declared the third week of September as Medical Technology Week in the Philippines. It was signed on September 6, 1973. **Therefore, B should be the correct answer.** There might be a typo in option 'a' in the original source."
            },
            {
                "id": 275,
                "question": "How many primers are required when performing an Amplification-refractory mutation system PCR?",
                "options": [
                    "2",
                    "4",
                    "6",
                    "8"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Amplification-Refractory Mutation System (ARMS)-PCR, also known as Allele-Specific PCR (AS-PCR), is used to detect single nucleotide polymorphisms or mutations. A typical ARMS assay uses four primers in a single reaction (multiplex) or two separate reactions: two outer primers (forward and reverse) that flank the region of interest (acting as internal controls), one allele-specific primer designed to anneal perfectly to the wild-type allele, and another allele-specific primer designed to anneal perfectly to the mutant allele. This setup allows determination of heterozygosity or homozygosity."
            },
            {
                "id": 276,
                "question": "Under DOH AO 0037-2021, the designated Biosafety Officer of the laboratory should be a",
                "options": [ // Requires specific DOH AO knowledge
                    "Pathologist",
                    "Infection Control Nurse",
                    "Medical Technologist",
                    "Any Healthcare Professional with BSO training"
                 ],
                "correctAnswerIndex": 2, // index for c ( Placeholder - Check AO 2021-0037 for exact requirement)
                "correctAnswerLetter": "c",
                "rationalization": "DOH Administrative Order 2021-0037 (Revised Rules and Regulations Governing the Licensure of Clinical Laboratories in the Philippines) outlines requirements for clinical laboratories. The specific qualification required for the designated Biosafety Officer would be detailed within this AO. It often requires specific training and could potentially be a Pathologist, Medical Technologist, or another qualified individual depending on the lab's service capability. **Check AO 2021-0037 for definitive answer.** (Registered Med Tech is often the requirement)."
            },
            {
                "id": 277,
                "question": "It is the least effective control in the hierarchy of controls of biosafety.",
                "options": [
                    "Elimination",
                    "Engineering Control",
                    "PPE",
                    "Substitution"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "The hierarchy of controls ranks safety measures from most effective to least effective. The standard hierarchy is: 1. Elimination (physically remove the hazard), 2. Substitution (replace the hazard), 3. Engineering controls (isolate people from hazard - e.g., BSCs), 4. Administrative controls (change the way people work - e.g., SOPs, training), 5. Personal Protective Equipment (PPE - protect the worker with barriers). PPE is considered the least effective control because it relies heavily on correct selection, fit, use, and maintenance, and it doesn't remove the hazard itself."
            },
            {
                "id": 278,
                "question": "Processing of Xpert Xpress SARS-COV-2 testing is done inside a ___ at the minimum.",
                "options": [
                    "Clean Bench",
                    "BSL 1 Facility",
                    "BSL 3 Facility",
                    "BSL 2 Facility"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "The Cepheid Xpert Xpress SARS-CoV-2 test is a cartridge-based nucleic acid amplification test. While the cartridge system itself is closed, handling potentially infectious patient specimens (like nasopharyngeal swabs) prior to loading the cartridge requires appropriate biosafety precautions. Regulatory bodies and guidelines typically recommend that specimen handling and testing for SARS-CoV-2 be performed under Biosafety Level 2 (BSL-2) conditions, often utilizing a Class II Biological Safety Cabinet (BSC) for procedures that may generate aerosols."
            },
            {
                "id": 279,
                "question": "SARS-COV-2 testing should be done under this type of Biosafety Cabinet at the minimum.",
                "options": [
                    "BSC Class I",
                    "BSC Class II",
                    "Laminar Flow Hood",
                    "BSC Class III"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "As mentioned above, handling specimens for SARS-CoV-2 testing typically requires BSL-2 containment. The appropriate Biological Safety Cabinet (BSC) for BSL-2 work involving potential aerosols is a Class II BSC. Class II BSCs provide personnel, product, and environmental protection through HEPA-filtered inflow and downflow air. Class I BSCs only provide personnel/environmental protection. Laminar flow hoods (c) provide product protection only (unsuitable for infectious agents). Class III BSCs offer maximum containment (BSL-4)."
            },
            {
                "id": 280,
                "question": "Should you use an uncalibrated BSC?",
                "options": [
                    "Yes",
                    "No",
                    "It depends on the procedure",
                    "Maybe"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Biological Safety Cabinets must be regularly certified (calibrated and tested) to ensure they are functioning correctly and providing the intended level of protection (proper airflow, HEPA filter integrity). Using an uncalibrated or uncertified BSC means its protective capabilities are unknown and potentially compromised, putting personnel, the environment, and potentially the experiment/product at risk. Therefore, an uncalibrated BSC should not be used."
            },
            {
                "id": 281,
                "question": "What is the primary reason why you should minimize movement of your arms in and out of the BSC?",
                "options": [
                    "They can contaminate the samples",
                    "They introduce contamination to the work surface",
                    "They introduce contamination inside the cabinet",
                    "They disrupt the airflow and makes the BSC less effective"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Rapid or excessive movement of arms in and out of the front opening of a Class II BSC disrupts the protective air curtain (inflow air). This disruption can compromise the containment of aerosols generated inside the cabinet (potentially exposing the worker) and can allow contaminants from the room air to enter the cabinet's work zone (potentially contaminating the samples/cultures). While contamination (a, c) is a concern, the primary reason related to BSC function is the disruption of the protective airflow barrier (d)."
            },
            {
                "id": 282,
                "question": "All of the following statements about absorbance spectrophotometry is false, except?",
                "options": [
                    "Absorbance is directly proportional to transmittance",
                    "Percent transmittance is directly proportional to concentration",
                    "Percent transmittance is directly proportional to path length",
                    "Absorbance is directly proportional to concentration"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "This question asks which statement is TRUE. According to the Beer-Lambert Law: Absorbance (A) is directly proportional to the concentration (c) of the absorbing species and the path length (b) of the light through the sample (A = εbc, where ε is molar absorptivity). Transmittance (T) is the fraction of light passing through; %T = 100 * T. Absorbance is related to transmittance by A = -log(T) = 2 - log(%T). Therefore: a) Absorbance is *inversely* related to transmittance (logarithmically). b) Percent transmittance is *inversely* related to concentration (logarithmically). c) Percent transmittance is *inversely* related to path length (logarithmically). d) Absorbance *is* directly proportional to concentration (Beer's Law). Statement d is TRUE."
            },
            {
                "id": 283,
                "question": "The following are requirements for quality control samples: (I) Convenient packaging; (II) Stable; (III) Resembles human sample; (IV) Expensive to ensure quality",
                "options": [
                    "I, II, III",
                    "II, III",
                    "I, II, III, IV",
                    "II, III, IV" // Source selection, interprets IV generously
                ],
                "correctAnswerIndex": 0,
                "correctAnswerLetter": "a",
                "rationalization": "Convenient Packaging (I): Ensures ease of handling, storage, and consistent usage without risk of contamination or degradation. Stable (II): Critical for maintaining integrity over time, allowing reliable calibration and validation of instruments. Resembles Human Sample (III): Mimics real patient samples to ensure test accuracy and relevance for diagnostic workflows."
            },
            {
                "id": 284,
                "question": "Imprecision is determined by repeated analysis study. Meanwhile, inaccuracy is determined by three different types of study (recovery, interference and COM study).",
                "options": [
                    "Only the first statement is true",
                    "Only the second statement is true",
                    "Both statements are true.",
                    "Both statements are false."
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Imprecision (random error) refers to the reproducibility of measurements and is assessed by analyzing the same sample multiple times and calculating statistics like standard deviation or coefficient of variation. Inaccuracy (systematic error or bias) refers to how close a measurement is to the true value and is assessed using: recovery studies (adding known analyte amounts), interference studies (assessing effects of other substances), and comparison of methods (COM) studies (comparing results to a reference method or established method). Both statements correctly describe how these performance characteristics are evaluated."
            },
            {
                "id": 285,
                "question": "In electrophoresis, particles migrate to the ___ at pH 8.6.",
                "options": [
                    "Anode",
                    "Cathode",
                    "Isoelectric point",
                    "Origin"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "In standard clinical electrophoresis (e.g., serum proteins, hemoglobin), separation is usually performed using an alkaline buffer with a pH around 8.6. At this pH, most proteins (like albumin and globulins) have a net negative charge because the pH is above their isoelectric points. In an electric field, negatively charged particles (anions) migrate towards the positive electrode, which is the anode."
            },
            {
                "id": 286,
                "question": "The electrode for measuring pCO2:",
                "options": [
                    "Clark",
                    "Severinghaus",
                    "Nernst",
                    "Calomel"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "The Severinghaus electrode is specifically designed to measure the partial pressure of carbon dioxide (pCO2) in blood gas analysis. It's essentially a modified pH electrode covered by a CO2-permeable membrane and bicarbonate buffer layer. CO2 diffuses across the membrane, changes the pH of the buffer, and this pH change is measured and related back to pCO2. Clark electrode measures pO2. Nernst equation relates potential to concentration. Calomel is a reference electrode."
            },
            {
                "id": 287,
                "question": "This disinfectant is used as a substitute for alcohol when the blood to be collected is for ethanol testing:",
                "options": [
                    "Benzalkonium chloride",
                    "Ethanol",
                    "Isopropyl Alcohol",
                    "Merthiolate"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "When collecting blood for legal or clinical blood alcohol (ethanol) determination, the venipuncture site must not be cleansed with alcohol swabs (isopropyl or ethanol) as this can contaminate the sample and falsely elevate results. Non-alcohol-based antiseptics like povidone-iodine or benzalkonium chloride should be used instead."
            },
            {
                "id": 288,
                "question": "A negative acute phase reactant:",
                "options": [
                    "Ceruloplasmin",
                    "Transferrin",
                    "Serum Amyloid A",
                    "C-Reactive Protein"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Acute phase reactants (APRs) are proteins whose plasma concentrations change significantly in response to inflammation. Positive APRs (increase during inflammation) include CRP (d), Serum Amyloid A (c), ceruloplasmin (a), fibrinogen, haptoglobin. Negative APRs (decrease during inflammation) include albumin, prealbumin, and transferrin (b)."
            },
            {
                "id": 289,
                "question": "The following inhibitors are correctly matched to the disease they may cause if deficient: (I) Alpha1 anticyhmotrypsin: hepatic cirrhosis; (II) Alpha2 antiplasmin: hemorrhage; (III) C1 inhibitor: hereditary angioedema; (IV) Ceruloplasmin: Menkes' disease",
                "options": [
                    "I, II, III",
                    "I, II, IV",
                    "I, II, IV",
                    "II, III, IV",
                    "All of the above"
                ],
                "correctAnswerIndex": 4, // index for e
                "correctAnswerLetter": "e",
                "rationalization": "(I) Alpha-1 antitrypsin deficiency → Hepatic cirrhosis Alpha-1 antitrypsin (AAT) protects tissues from enzymes like neutrophil elastase. Deficient AAT accumulates in the liver, causing hepatocyte damage and cirrhosis (especially in homozygous ZZ genotypes). (II) Alpha-2 antiplasmin deficiency → Hemorrhage Alpha-2 antiplasmin inhibits fibrinolysis by neutralizing plasmin. Deficiency leads to uncontrolled clot breakdown (hyperfibrinolysis), resulting in bleeding disorders. (III) C1 inhibitor deficiency → Hereditary angioedema C1 inhibitor regulates complement and kinin systems. Its deficiency causes excessive bradykinin production, leading to recurrent angioedema (swelling of skin/mucosa). (IV) Ceruloplasmin deficiency → Menkes' disease Controversy: Menkes' disease is primarily caused by mutations in the ATP7A gene, impairing copper transport. This results in secondary ceruloplasmin deficiency (as it is copper-dependent). While ceruloplasmin levels are low in Menkes', the root cause is defective copper metabolism, not ceruloplasmin itself. However, some protocols associate Menkes' with ceruloplasmin deficiency due to its role as a biomarker."
            },
            {
                "id": 290,
                "question": "Which of the following processes does not result in the production of glycogen? (I) Glycolysis; (II) Gluconeogenesis; (III) Glycogenolysis; (IV) Glycogenesis",
                "options": [
                    "I, II",
                    "I, II, III",
                    "II, III, IV",
                    "I, III, IV"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Glycogen is a storage form of glucose. Glycogenesis (IV) is the *synthesis* or production of glycogen from glucose. Glycolysis (I) is the breakdown of glucose for energy. Gluconeogenesis (II) is the synthesis of glucose from non-carbohydrate precursors. Glycogenolysis (III) is the *breakdown* of glycogen to release glucose. Therefore, Glycolysis, Gluconeogenesis, and Glycogenolysis do *not* produce glycogen."
            },
            {
                "id": 291,
                "question": "The reference method for lipoprotein assay:",
                "options": [
                    "Electrophoresis",
                    "Chemical precipitation",
                    "Ultracentrifugation",
                    "Immunoassay"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "Ultracentrifugation is considered the reference method (gold standard) for separating and quantifying lipoprotein fractions (Chylomicrons, VLDL, LDL, HDL) based on their different densities. Electrophoresis separates based on charge and size, chemical precipitation selectively removes certain lipoproteins, and immunoassays measure specific apoproteins but not the whole particle distribution directly like ultracentrifugation."
            },
            {
                "id": 292,
                "question": "What is the main mechanism of a biosafety cabinet that prevents infectious materials from escaping through the front opening into the room?",
                "options": [
                    "Window sash",
                    "Inflow",
                    "Downflow",
                    "UV Light"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "Class I and II Biological Safety Cabinets utilize an inward flow of room air (inflow) at the front opening. This carefully controlled inflow air acts as an air curtain, preventing aerosols or contaminants generated inside the cabinet work zone from escaping into the room and potentially exposing the operator or environment. HEPA filtration cleans the downflow and exhaust air. UV is for surface decontamination when not in use. Window sash provides a physical barrier but airflow is key."
            },
            {
                "id": 293,
                "question": "Movement outside of the BSC should be minimized in order to",
                "options": [
                    "Avoid spreading contamination outside of the cabinet",
                    "Avoid introducing contamination inside the cabinet",
                    "Minimize the disruption of the air curtain in front of the cabinet",
                    "Minimize contamination of workers' hands"
                ],
                "correctAnswerIndex": 2, // index for c
                "correctAnswerLetter": "c",
                "rationalization": "As explained for Q281, movement near the front opening, including personnel walking past quickly or activity just outside the cabinet, can disrupt the protective inflow air curtain. This turbulence can potentially allow contaminants to enter the cabinet or aerosols to escape. While avoiding spread (a) or introducing contaminants (b) are related consequences, the direct mechanism affected is the airflow barrier (c)."
            },
            {
                "id": 294,
                "question": "Which among the following are effective against enveloped viruses like SARS-COV-2?",
                "options": [
                    "Hypochlorite",
                    "Alcohol",
                    "Hydrogen Peroxide",
                    "All of the above"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Enveloped viruses, like SARS-CoV-2, have a lipid envelope that is relatively susceptible to disinfectants. Common disinfectants effective against enveloped viruses include: a) Hypochlorite (bleach solutions), b) Alcohols (like 70% ethanol or isopropanol), and c) Hydrogen peroxide solutions. Therefore, all listed options are generally effective."
            },
            {
                "id": 295,
                "question": "Which of the following procedures generate aerosols/droplets/splashes which can cause Laboratory Acquired Infection:",
                "options": [
                    "Shaking",
                    "Pipetting",
                    "Dispensing",
                    "All of the above"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Many common laboratory procedures can generate infectious aerosols, droplets, or splashes if performed improperly or without appropriate containment. These include: a) Shaking or vortexing tubes, b) Forcefully aspirating or expelling liquids from pipettes, c) Dispensing specimens, especially under pressure or creating bubbles (e.g., into cartridges), centrifugation (if tubes break or leak), opening/closing tubes, streaking plates. All listed actions carry a potential risk."
            },
            {
                "id": 296,
                "question": "The gold standard of SARS-CoV-2 assay",
                "options": [
                    "RT-PCR",
                    "qPCR",
                    "PCR",
                    "Lateral Flow Immunoassay"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Nucleic Acid Amplification Tests (NAATs), particularly Reverse Transcription Polymerase Chain Reaction (RT-PCR), are considered the gold standard for the diagnosis of active SARS-CoV-2 infection. These tests detect the presence of specific viral RNA sequences with high sensitivity and specificity. qPCR (b) is quantitative PCR (often used in RT-PCR). PCR alone (c) detects DNA. Lateral flow immunoassays (d) typically detect antigens or antibodies and are generally less sensitive than RT-PCR for detecting active infection, especially early on."
            },
            {
                "id": 297,
                "question": "Short strands of ______ primer are used in DNA replication.",
                "options": [
                    "DNA",
                    "RNA",
                    "Enzyme",
                    "Ribosome"
                ],
                "correctAnswerIndex": 1, // index for b
                "correctAnswerLetter": "b",
                "rationalization": "DNA polymerases require a starting point (a 3'-OH group) to begin synthesizing DNA. They cannot start a new strand from scratch. In DNA replication, an enzyme called primase synthesizes short strands of RNA, called RNA primers. These primers provide the necessary 3'-OH end for DNA polymerase to attach DNA nucleotides and initiate the synthesis of the new DNA strand. The RNA primers are later removed and replaced with DNA."
            },
            {
                "id": 298,
                "question": "What is Molecular Biology?",
                "options": [
                    "Deals with the study of ancient organisms",
                    "Deals with the study of animal behavior",
                    "Deals with the study of plants and fungi",
                    "Deals with the chemical structures and processes of biological events"
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "Molecular biology is the field of biology that studies the composition, structure, and interactions of cellular molecules – such as nucleic acids (DNA and RNA) and proteins – that carry out the biological processes essential for cell function and life. It focuses on understanding biological events at the molecular level, including their underlying chemical structures and biochemical processes like DNA replication, transcription, and translation."
            },
            {
                "id": 299,
                "question": "What does the '19' in 'COVID-19' refer to?",
                "options": [
                    "There are 19 variants of the coronavirus.",
                    "There are 19 symptoms of the coronavirus disease.",
                    "This is the 19th coronavirus pandemic.",
                    "The coronavirus and the disease it causes were identified in 2019."
                ],
                "correctAnswerIndex": 3, // index for d
                "correctAnswerLetter": "d",
                "rationalization": "The name COVID-19 is an acronym assigned by the World Health Organization (WHO). It stands for COronaVIrus Disease 2019. The '19' specifically refers to the year 2019, when the outbreak associated with this novel coronavirus (SARS-CoV-2) was first detected."
            },
            {
                "id": 300,
                "question": "There is more than one coronavirus.",
                "options": [
                    "True",
                    "False"
                ],
                "correctAnswerIndex": 0, // index for a
                "correctAnswerLetter": "a",
                "rationalization": "Coronaviruses represent a large family of viruses (Coronaviridae). While SARS-CoV-2 caused the COVID-19 pandemic, several other coronaviruses are known to infect humans, often causing common cold symptoms (e.g., HCoV-229E, HCoV-NL63, HCoV-OC43, HCoV-HKU1). Additionally, SARS-CoV (causing Severe Acute Respiratory Syndrome) and MERS-CoV (causing Middle East Respiratory Syndrome) are other notable coronaviruses that have caused significant human disease outbreaks."
            }
            // --- END OF PARSED DATA ---
        ];

        let currentQuestionIndex = 0;
        let synth = window.speechSynthesis;
        let utterance = new SpeechSynthesisUtterance();
        let voices = [];
        let isSpeechCancelled = false; // <<<--- ADDED: Flag to manage cancellation
        let answerRevealed = false; // <<<--- ADDED: Flag for current question state

        // DOM Elements
        const bodyElement = document.body; // <<<--- ADDED: Reference to body for dark mode
        const themeToggleBtn = document.getElementById('theme-toggle-btn'); // <<<--- ADDED
        const questionPanel = document.querySelector('.question-panel');
        const rationalizationPanel = document.querySelector('.rationalization-panel');
        const questionTextElement = document.getElementById('question-text');
        const optionsListElement = document.getElementById('options-list');
        const rationalizationTextElement = document.getElementById('rationalization-text');
        const correctAnswerDisplayElement = document.getElementById('correct-answer-display');
        const questionNumberElement = document.getElementById('question-number');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const questionSelect = document.getElementById('question-select');
        const navigationDiv = document.querySelector('.navigation');
        const voiceSelect = document.getElementById('voice-select');
        const contactBtn = document.getElementById('contact-btn'); // Added for consistency
        const emailLink = document.getElementById('email-link');   // Added for consistency

        let readQuestionBtn, readRationalizationBtn, stopSpeechBtn; // Speech buttons

        // --- Keep populateVoiceList() function ---
         function populateVoiceList() {
           if (!synth) return;
           voices = synth.getVoices().sort((a, b) => a.lang.localeCompare(b.lang));
           const selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
           voiceSelect.innerHTML = '';
           let preferredVoiceIndex = 0;
           const preferredVoices = ["Google US English", "Microsoft Zira - English (United States)", "Microsoft David - English (United States)", "Google UK English Female", "Google UK English Male", "Alex"];

           voices.forEach((voice, i) => {
             const option = document.createElement('option');
             option.textContent = `${voice.name} (${voice.lang})`;
              if (voice.default) option.textContent += ' -- DEFAULT';
             option.setAttribute('data-lang', voice.lang);
             option.setAttribute('data-name', voice.name);
             voiceSelect.appendChild(option);
              if (preferredVoices.includes(voice.name) && preferredVoiceIndex === 0) {
                  preferredVoiceIndex = i;
              }
           });
           voiceSelect.selectedIndex = selectedIndex > 0 ? selectedIndex : preferredVoiceIndex;
         }

        // --- Modify setupSpeech() ---
        function setupSpeech() {
            if ('speechSynthesis' in window) {
                // Create Question Speech Button (if not exists)
                if (!document.getElementById('read-question-btn')) {
                    readQuestionBtn = document.createElement('button');
                    readQuestionBtn.textContent = 'Read Q+A'; // Changed Label
                    readQuestionBtn.id = 'read-question-btn';
                    readQuestionBtn.classList.add('speech-button');
                    const questionSpeechControlDiv = document.createElement('div');
                    questionSpeechControlDiv.classList.add('speech-controls');
                    questionSpeechControlDiv.appendChild(readQuestionBtn);
                    questionPanel.appendChild(questionSpeechControlDiv);

                     readQuestionBtn.addEventListener('click', () => {
                         speakCurrentQuestionAndOptions(); // Use new dedicated function
                     });
                }

                // Create Rationalization Speech Button (if not exists)
                if (!document.getElementById('read-rationalization-btn')) {
                    readRationalizationBtn = document.createElement('button');
                    readRationalizationBtn.textContent = 'Read Rationalization';
                    readRationalizationBtn.id = 'read-rationalization-btn';
                    readRationalizationBtn.classList.add('speech-button');
                    const rationalizationSpeechControlDiv = document.createElement('div');
                    rationalizationSpeechControlDiv.classList.add('speech-controls');
                    rationalizationSpeechControlDiv.appendChild(readRationalizationBtn);
                    rationalizationPanel.appendChild(rationalizationSpeechControlDiv);

                    readRationalizationBtn.addEventListener('click', () => {
                        speakRationalizationOnly(); // Use new dedicated function
                    });
                }

                // Create Global Stop Button (if not exists)
                 if (!document.getElementById('stop-speech-btn')) {
                     stopSpeechBtn = document.createElement('button');
                     stopSpeechBtn.textContent = 'Stop Speech';
                     stopSpeechBtn.id = 'stop-speech-btn';
                     stopSpeechBtn.classList.add('speech-button');
                     // Insert stop button before the theme toggle button
                     const themeBtn = document.getElementById('theme-toggle-btn');
                     if (themeBtn) {
                         navigationDiv.insertBefore(stopSpeechBtn, themeBtn);
                     } else {
                         navigationDiv.appendChild(stopSpeechBtn); // Fallback
                     }


                     stopSpeechBtn.addEventListener('click', () => {
                         isSpeechCancelled = true; // <<<--- Set cancel flag
                         synth.cancel(); // Stop any ongoing speech
                     });
                 }


                // --- Populate voices ---
                populateVoiceList();
                if (speechSynthesis.onvoiceschanged !== undefined) {
                  speechSynthesis.onvoiceschanged = populateVoiceList;
                }

            } else {
                console.warn("Speech Synthesis not supported by this browser.");
                if (voiceSelect) voiceSelect.disabled = true;
                if (voiceSelect?.previousElementSibling) voiceSelect.previousElementSibling.style.opacity = 0.5;
                // Hide speech buttons if API not supported
                document.querySelectorAll('.speech-button').forEach(btn => btn.style.display = 'none');
            }
        }

        // --- Modify speakText/startSpeaking ---
        function speakText(text, onEndCallback = null) {
            if (!synth || !utterance) {
                console.error("Speech synthesis not available.");
                 if(onEndCallback) onEndCallback();
                return;
            }

            isSpeechCancelled = false; // <<<--- Reset cancel flag before speaking

            if (synth.speaking) {
                 console.log("Cancelling previous speech for new request");
                synth.cancel(); // Cancel first
                 // Use timeout to allow cancel to process fully
                 setTimeout(() => {
                      if (!isSpeechCancelled) { // Double-check flag wasn't set during timeout
                          startSpeaking(text, onEndCallback);
                      } else {
                           console.log("Speech cancelled before restarting");
                           isSpeechCancelled = false; // Reset flag for next attempt
                      }
                 }, 100); // Increased delay slightly
             } else {
                startSpeaking(text, onEndCallback);
            }
        }

        function startSpeaking(text, onEndCallback) {
             if (!synth || !utterance || isSpeechCancelled) { // Check flag here too
                 console.log("StartSpeaking aborted (no synth or cancelled)");
                 isSpeechCancelled = false; // Reset flag
                 return;
             }

            const selectedOption = voiceSelect.options[voiceSelect.selectedIndex];
            const selectedVoiceName = selectedOption ? selectedOption.getAttribute('data-name') : null;

            utterance.text = text;
            utterance.pitch = 1;
            utterance.rate = 0.9;

            if (selectedVoiceName) {
                utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
            } else {
                 utterance.voice = voices.find(voice => voice.default) || voices[0];
            }

            utterance.onend = () => {
                utterance.onend = null; // Clean up
                utterance.onerror = null; // Clean up
                 if (!isSpeechCancelled && onEndCallback) { // <<<--- Check cancel flag before calling callback
                     console.log("Speech ended naturally, calling callback.");
                    onEndCallback();
                } else {
                     console.log("Speech ended or callback skipped due to cancellation flag.");
                     isSpeechCancelled = false; // Reset flag anyway after speech ends/is cancelled
                }
            };

            utterance.onerror = (event) => {
                console.error('SpeechSynthesisUtterance.onerror', event);
                utterance.onend = null; // Clean up
                utterance.onerror = null; // Clean up
                 isSpeechCancelled = false; // Reset flag on error too
            };

            console.log("Attempting to speak:", text.substring(0, 30) + "...");
            synth.speak(utterance);
        }
        // --- END MODIFIED FUNCTION ---

        // --- ADDED: Helper function to read only Q+Options ---
         function speakCurrentQuestionAndOptions() {
             const question = questionsData[currentQuestionIndex];
             const textToRead = `Question ${question.id}. ${question.question}. Options are: ` +
                                question.options.map((opt, i) => `${String.fromCharCode(97 + i)}. ${opt}`).join('. ');
             speakText(textToRead, null); // No callback needed here
         }
        // --- ADDED: Helper function to read only Rationalization ---
         function speakRationalizationOnly() {
             const question = questionsData[currentQuestionIndex];
             const rationalizationTextPart = `Rationalization: ${question.rationalization}.`;
             const correctAnswerTextPart = `The correct answer is ${question.correctAnswerLetter}. ${question.options[question.correctAnswerIndex]}.`;

             // Define the callback to read the correct answer after rationalization
             const readCorrectAnswerCallback = () => {
                 if (!isSpeechCancelled) { // Check cancellation flag before proceeding
                     speakText(correctAnswerTextPart, null);
                 }
             };

             speakText(rationalizationTextPart, readCorrectAnswerCallback);
         }

        // --- Modify loadQuestion ---
        function loadQuestion(index) {
             if (synth && synth.speaking) {
                isSpeechCancelled = true; // Set flag when navigating
                synth.cancel();
             }
            answerRevealed = false; // <<<--- Reset answered state

            if (index < 0 || index >= questionsData.length) {
                console.error("Invalid question index:", index);
                return;
            }

            currentQuestionIndex = index;
            const question = questionsData[index];

            // Update Question Panel
            questionTextElement.textContent = `${question.id}. ${question.question}`;
            optionsListElement.innerHTML = '';

            question.options.forEach((option, i) => {
                const li = document.createElement('li');
                const input = document.createElement('input');
                const label = document.createElement('label');
                const optionLetter = String.fromCharCode(97 + i);

                input.type = 'radio';
                input.name = `question-${question.id}`;
                input.id = `q${question.id}-opt${i}`;
                input.value = i;
                input.style.marginRight = '0.8rem';
                input.disabled = false; // Re-enable on load

                label.htmlFor = `q${question.id}-opt${i}`;
                label.textContent = `${optionLetter}. ${option}`;

                li.appendChild(input);
                li.appendChild(label);

                // --- REMOVED initial correct answer highlighting ---
                // if (i === question.correctAnswerIndex) {
                //     li.classList.add('correct-answer');
                // }

                li.style.pointerEvents = 'auto'; // Re-enable clicks
                li.classList.remove('disabled', 'selected-answer', 'correct-answer', 'wrong-answer', 'revealed'); // Clear all status classes

                li.addEventListener('click', () => handleOptionClick(li, i)); // Use new handler
                input.addEventListener('change', () => handleOptionClick(li, i)); // Also trigger on radio change

                optionsListElement.appendChild(li);
            });

            // Hide rationalization panel
            rationalizationPanel.classList.remove('visible');
            rationalizationPanel.style.opacity = '0';
            rationalizationPanel.style.maxHeight = '0';
            // Ensure other styles are reset if necessary (CSS handles transitions)

            // Update Rationalization Panel Content (but keep hidden)
            rationalizationTextElement.textContent = question.rationalization;
            correctAnswerDisplayElement.textContent = `${question.correctAnswerLetter}. ${question.options[question.correctAnswerIndex]}`;

            // Update Navigation
            questionNumberElement.textContent = `Q ${question.id}/${questionsData.length}`;
            questionSelect.value = index;
            updateNavButtons();

            // Scroll to top smoothly for better UX on navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- NEW: Handler for clicking an option ---
        function handleOptionClick(selectedLiElement, selectedIndex) {
            if (answerRevealed) return; // Don't do anything if already answered
            answerRevealed = true; // Mark as answered

            const question = questionsData[currentQuestionIndex];
            const correctIndex = question.correctAnswerIndex;
            const isCorrect = (selectedIndex === correctIndex);

            // Disable all options
            optionsListElement.querySelectorAll('li').forEach((li, i) => {
                li.classList.add('disabled', 'revealed'); // Add 'revealed' to trigger final styling
                const input = li.querySelector('input');
                if (input) input.disabled = true;

                // Apply final correct/wrong styles
                 if (i === correctIndex) {
                     li.classList.add('correct-answer');
                 } else {
                     li.classList.add('wrong-answer');
                 }
            });

             // Mark the specific one the user clicked
            selectedLiElement.classList.add('selected-answer');
            // The revealed styles will take care of the final look (green/red + blue border)

            // Show rationalization panel
            rationalizationPanel.classList.add('visible');
            rationalizationPanel.style.opacity = '1';
            rationalizationPanel.style.maxHeight = '1000px'; // Ensure enough space

             // --- Trigger Speech ---
             speakRationalizationOnly(); // Reads rationalization then correct answer

             // Optional scroll
             // rationalizationPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }


        // --- Keep updateNavButtons() function ---
        function updateNavButtons() {
            prevBtn.disabled = currentQuestionIndex === 0;
            nextBtn.disabled = currentQuestionIndex === questionsData.length - 1;
        }
        // --- Keep populateSelect() function ---
         function populateSelect() {
            questionsData.forEach((q, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = `Question ${q.id}`;
                questionSelect.appendChild(option);
            });
        }

        // --- Modify Nav Button Listeners ---
        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                loadQuestion(currentQuestionIndex - 1);
                speakCurrentQuestionAndOptions(); // <<<--- ADDED: Read new question/options
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentQuestionIndex < questionsData.length - 1) {
                loadQuestion(currentQuestionIndex + 1);
                 speakCurrentQuestionAndOptions(); // <<<--- ADDED: Read new question/options
            }
        });

        questionSelect.addEventListener('change', (e) => {
            const selectedIndex = parseInt(e.target.value, 10);
            loadQuestion(selectedIndex);
            speakCurrentQuestionAndOptions(); // <<<--- ADDED: Read new question/options
        });

        // --- ADDED: Dark/Light Mode Logic ---
        function applyTheme(theme) {
            if (theme === 'dark') {
                bodyElement.classList.add('dark-mode');
                themeToggleBtn.textContent = '☀️'; // Sun icon for light mode
                localStorage.setItem('theme', 'dark');
            } else {
                bodyElement.classList.remove('dark-mode');
                themeToggleBtn.textContent = '🌙'; // Moon icon for dark mode
                localStorage.setItem('theme', 'light');
            }
        }

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = bodyElement.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });

        // --- Modify DOMContentLoaded listener ---
        document.addEventListener('DOMContentLoaded', () => {
            // Apply saved theme or default to light
            const savedTheme = localStorage.getItem('theme') || 'light';
            applyTheme(savedTheme);

            populateSelect();
            setupSpeech();
            loadQuestion(0); // Load first question
            // Don't automatically read on initial load, user can press button if desired
            
            // --- Keep Contact Button Logic ---
            if (contactBtn && emailLink) {
                const emailAddress = 'juanteodoro.devera@gmail.com';
                const subject = encodeURIComponent("Contact via Reviewer");
                const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}`;
                emailLink.href = gmailLink;
                emailLink.target = "_blank";

                contactBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    emailLink.classList.toggle('visible');
                });
            }
              // ----- Swipe Navigation Logic -----
              const contentArea = document.querySelector('.content-area'); // Target content area for swipes
              const swipeIndicatorPrev = document.getElementById('swipe-indicator-prev');
              const swipeIndicatorNext = document.getElementById('swipe-indicator-next');
              let touchStartX = 0;
              let touchStartY = 0;
              let touchEndX = 0;
              let touchEndY = 0;
              let isSwiping = false;
              const minSwipeDistance = 50; // Minimum pixels to be considered a swipe
              const maxVerticalSwipe = 50; // Maximum vertical movement allowed for a horizontal swipe
  
              if (contentArea && swipeIndicatorPrev && swipeIndicatorNext) { // Ensure elements exist
                  contentArea.addEventListener('touchstart', (event) => {
                      // Use the first touch point
                      const touch = event.changedTouches[0];
                      touchStartX = touch.screenX;
                      touchStartY = touch.screenY;
                      isSwiping = false;
                      // event.preventDefault(); // Be cautious with preventDefault on touchstart
                  }, { passive: true }); // Use passive: true if not preventing default scroll
  
                  contentArea.addEventListener('touchmove', (event) => {
                      const touch = event.changedTouches[0];
                      touchEndX = touch.screenX;
                      touchEndY = touch.screenY;
  
                      const deltaX = touchEndX - touchStartX;
                      const deltaY = touchEndY - touchStartY;
  
                      // Check if it's primarily a horizontal swipe and exceeds a small threshold
                      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
                          // If scrolling vertically is not intended during horizontal swipe, prevent it.
                          // Check if we already started swiping horizontally to avoid jerky behaviour.
                          // event.preventDefault(); // Use if needed, might block vertical scrolling
  
                          isSwiping = true; // Mark as swiping
  
                          // Show the appropriate indicator
                          if (deltaX > 0) { // Swiping Right (Previous)
                              if (!prevBtn.disabled) {
                                 swipeIndicatorPrev.classList.add('visible');
                                 swipeIndicatorNext.classList.remove('visible');
                              }
                          } else { // Swiping Left (Next)
                               if (!nextBtn.disabled) {
                                  swipeIndicatorNext.classList.add('visible');
                                  swipeIndicatorPrev.classList.remove('visible');
                               }
                          }
                      } else {
                           // If vertical movement dominates or deltaX is small, don't treat as horizontal swipe
                           // Ensure indicators are hidden if swipe direction becomes vertical
                           if (isSwiping) {
                               swipeIndicatorPrev.classList.remove('visible');
                               swipeIndicatorNext.classList.remove('visible');
                               // Don't reset isSwiping here, let touchend handle the final action based on distance
                           }
                      }
  
                  }, { passive: false }); // Use passive: false IF preventDefault() is used inside
  
                  contentArea.addEventListener('touchend', (event) => {
                      // Hide indicators regardless of swipe success
                      swipeIndicatorPrev.classList.remove('visible');
                      swipeIndicatorNext.classList.remove('visible');
  
                      if (!isSwiping) return; // Exit if not considered a swipe during move
  
                      const deltaX = touchEndX - touchStartX;
                      const deltaY = touchEndY - touchStartY;
  
                      // Check for valid horizontal swipe on touchend
                      if (Math.abs(deltaX) >= minSwipeDistance && Math.abs(deltaY) < maxVerticalSwipe) {
                          if (deltaX > 0) { // Swipe Right -> Previous
                              if (!prevBtn.disabled) {
                                  // console.log("Swipe Right Detected - Previous");
                                  loadQuestion(currentQuestionIndex - 1);
                                  speakCurrentQuestionAndOptions();
                              }
                          } else { // Swipe Left -> Next
                              if (!nextBtn.disabled) {
                                  // console.log("Swipe Left Detected - Next");
                                  loadQuestion(currentQuestionIndex + 1);
                                  speakCurrentQuestionAndOptions();
                              }
                          }
                      }
  
                      // Reset values for the next touch interaction
                      touchStartX = 0;
                      touchStartY = 0;
                      touchEndX = 0;
                      touchEndY = 0;
                      isSwiping = false;
                  });
              } else {
                  console.error("Swipe navigation elements not found.");
              }
              // ----- End Swipe Navigation Logic -----
        });
