﻿define({ entries : {
    "betz2020critical": {
        "abstract": "This paper takes a first step towards a critical thinking curriculum for neural auto-regressive language models. We introduce a synthetic corpus of deductively valid arguments, and generate artificial argumentative texts to train and evaluate GPT-2. Significant transfer learning effects can be observed: Training a model on three simple core schemes allows it to accurately complete conclusions of different, and more complex types of arguments, too. The language models generalize the core argument schemes in a correct way. Moreover, we obtain consistent and promising results for NLU benchmarks. In particular, pre-training on the argument schemes raises zero-shot accuracy on the GLUE diagnostics by up to 15 percentage points. The findings suggest that intermediary pre-training on texts that exemplify basic reasoning abilities (such as typically covered in critical thinking textbooks) might help language models to acquire a broad range of reasoning skills. The synthetic argumentative texts presented in this paper are a promising starting point for building such a \"critical thinking curriculum for language models.\"",
        "archiveprefix": "arXiv",
        "author": "Gregor Betz and Christian Voigt and Kyle Richardson",
        "doi": "10.48550/arXiv.2009.07185",
        "eprint": "2009.07185",
        "keywords": "Reasoning, Large Language Models, Computation and Language (cs.CL), Artificial Intelligence (cs.AI)",
        "primaryclass": "cs.CL ,",
        "series": "arXiv",
        "title": "Critical Thinking for Language Models",
        "type": "misc",
        "url": "https://arxiv.org/pdf/2009.07185",
        "year": "2020"
    },
    "bubeck2023sparks": {
        "abstract": "Artificial intelligence (AI) researchers have been developing and refining large language models (LLMs) that exhibit remarkable capabilities across a variety of domains and tasks, challenging our understanding of learning and cognition. The latest model developed by OpenAI, GPT-4, was trained using an unprecedented scale of compute and data. In this paper, we report on our investigation of an early version of GPT-4, when it was still in active development by OpenAI. We contend that (this early version of) GPT-4 is part of a new cohort of LLMs (along with ChatGPT and Google's PaLM for example) that exhibit more general intelligence than previous AI models. We discuss the rising capabilities and implications of these models. We demonstrate that, beyond its mastery of language, GPT-4 can solve novel and difficult tasks that span mathematics, coding, vision, medicine, law, psychology and more, without needing any special prompting. Moreover, in all of these tasks, GPT-4's performance is strikingly close to human-level performance, and often vastly surpasses prior models such as ChatGPT. Given the breadth and depth of GPT-4's capabilities, we believe that it could reasonably be viewed as an early (yet still incomplete) version of an artificial general intelligence (AGI) system. In our exploration of GPT-4, we put special emphasis on discovering its limitations, and we discuss the challenges ahead for advancing towards deeper and more comprehensive versions of AGI, including the possible need for pursuing a new paradigm that moves beyond next-word prediction. We conclude with reflections on societal influences of the recent technological leap and future research directions.",
        "archiveprefix": "arXiv",
        "author": "S\u00e9bastien Bubeck and Varun Chandrasekaran and Ronen Eldan and Johannes Gehrke and Eric Horvitz and Ece Kamar and Peter Lee and Yin Tat Lee and Yuanzhi Li and Scott Lundberg and Harsha Nori and Hamid Palangi and Marco Tulio Ribeiro and Yi Zhang",
        "doi": "10.48550/arXiv.2303.12712",
        "eprint": "2303.12712",
        "keywords": "Large Language Models, Computation and Language (cs.CL), Artificial Intelligence (cs.AI)",
        "primaryclass": "cs.CL ,",
        "series": "arXiv",
        "title": "Sparks of Artificial General Intelligence: Early experiments with GPT-4",
        "type": "misc",
        "url": "https://arxiv.org/pdf/2303.12712",
        "year": "2023"
    },
    "chung2022scaling": {
        "abstract": "Finetuning language models on a collection of datasets phrased as instructions has been shown to improve model performance and generalization to unseen tasks. In this paper we explore instruction finetuning with a particular focus on (1) scaling the number of tasks, (2) scaling the model size, and (3) finetuning on chain-of-thought data. We find that instruction finetuning with the above aspects dramatically improves performance on a variety of model classes (PaLM, T5, U-PaLM), prompting setups (zero-shot, few-shot, CoT), and evaluation benchmarks (MMLU, BBH, TyDiQA, MGSM, open-ended generation). For instance, Flan-PaLM 540B instruction-finetuned on 1.8K tasks outperforms PALM 540B by a large margin (+9.4% on average). Flan-PaLM 540B achieves state-of-the-art performance on several benchmarks, such as 75.2% on five-shot MMLU. We also publicly release Flan-T5 checkpoints, which achieve strong few-shot performance even compared to much larger models, such as PaLM 62B. Overall, instruction finetuning is a general method for improving the performance and usability of pretrained language models.",
        "archiveprefix": "arXiv",
        "author": "Hyung Won Chung and Le Hou and Shayne Longpre and Barret Zoph and Yi Tay and William Fedus and Yunxuan Li and Xuezhi Wang and Mostafa Dehghani and Siddhartha Brahma and Albert Webson and Shixiang Shane Gu and Zhuyun Dai and Mirac Suzgun and Xinyun Chen and Aakanksha Chowdhery and Alex Castro-Ros and Marie Pellat and Kevin Robinson and Dasha Valter and Sharan Narang and Gaurav Mishra and Adams Yu and Vincent Zhao and Yanping Huang and Andrew Dai and Hongkun Yu and Slav Petrov and Ed H. Chi and Jeff Dean and Jacob Devlin and Adam Roberts and Denny Zhou and Quoc V. Le and Jason Wei",
        "doi": "10.48550/arXiv.2210.11416",
        "eprint": "2210.11416",
        "keywords": "Machine Learning (cs.LG), Computation and Language (cs.CL)",
        "primaryclass": "cs.LG ,",
        "series": "arXiv",
        "title": "Scaling Instruction-Finetuned Language Models",
        "type": "misc",
        "url": "https://arxiv.org/pdf/2210.11416",
        "year": "2022"
    },
    "creswell2022faithful": {
        "abstract": "Although contemporary large language models (LMs) demonstrate impressive question-answering capabilities, their answers are typically the product of a single call to the model. This entails an unwelcome degree of opacity and compromises performance, especially on problems that are inherently multi-step. To address these limitations, we show how LMs can be made to perform faithful multi-step reasoning via a process whose causal structure mirrors the underlying logical structure of the problem. Our approach works by chaining together reasoning steps, where each step results from calls to two fine-tuned LMs, one for selection and one for inference, to produce a valid reasoning trace. Our method carries out a beam search through the space of reasoning traces to improve reasoning quality. We demonstrate the effectiveness of our model on multi-step logical deduction and scientific question-answering, showing that it outperforms baselines on final answer accuracy, and generates humanly interpretable reasoning traces whose validity can be checked by the user.",
        "archiveprefix": "arXiv",
        "author": "Antonia Creswell and Murray Shanahan",
        "doi": "10.48550/arXiv.2208.14271",
        "eprint": "2208.14271",
        "keywords": "Reasoning, Causality, Large Language Models, Artificial Intelligence (cs.AI), Computation and Language (cs.CL)",
        "primaryclass": "cs.AI ,",
        "series": "arXiv",
        "title": "Faithful Reasoning Using Large Language Models",
        "type": "misc",
        "url": "https://arxiv.org/pdf/2208.14271",
        "year": "2022"
    },
    "creswell2022selectioninference": {
        "abstract": "Large language models (LLMs) have been shown to be capable of impressive few-shot generalisation to new tasks. However, they still tend to perform poorly on multi-step logical reasoning problems. Here we carry out a comprehensive evaluation of LLMs on 50 tasks that probe different aspects of logical reasoning. We show that language models tend to perform fairly well at single step inference or entailment tasks, but struggle to chain together multiple reasoning steps to solve more complex problems. In light of this, we propose a Selection-Inference (SI) framework that exploits pre-trained LLMs as general processing modules, and alternates between selection and inference to generate a series of interpretable, casual reasoning steps leading to the final answer. We show that a 7B parameter LLM used within the SI framework in a 5-shot generalisation setting, with no fine-tuning, yields a performance improvement of over 100% compared to an equivalent vanilla baseline on a suite of 10 logical reasoning tasks. The same model in the same setting even outperforms a significantly larger 280B parameter baseline on the same suite of tasks. Moreover, answers produced by the SI framework are accompanied by a causal natural-language-based reasoning trace, which has important implications for the safety and trustworthiness of the system.",
        "archiveprefix": "arXiv",
        "author": "Antonia Creswell and Murray Shanahan and Irina Higgins",
        "doi": "10.48550/arXiv.2205.09712",
        "eprint": "2205.09712",
        "keywords": "Artificial Intelligence (cs.AI), Computation and Language (cs.CL)",
        "primaryclass": "cs.AI ,",
        "series": "arXiv",
        "title": "Selection-Inference: Exploiting Large Language Models for Interpretable Logical Reasoning",
        "type": "misc",
        "url": "https://arxiv.org/pdf/2205.09712",
        "year": "2022"
    },
    "dalvi2022explaining": {
        "abstract": "Our goal, in the context of open-domain textual question-answering (QA), is to explain answers by showing the line of reasoning from what is known to the answer, rather than simply showing a fragment of textual evidence (a \"rationale'\"). If this could be done, new opportunities for understanding and debugging the system's reasoning become possible. Our approach is to generate explanations in the form of entailment trees, namely a tree of multipremise entailment steps from facts that are known, through intermediate conclusions, to the hypothesis of interest (namely the question + answer). To train a model with this skill, we created ENTAILMENTBANK, the first dataset to contain multistep entailment trees. Given a hypothesis (question + answer), we define three increasingly difficult explanation tasks: generate a valid entailment tree given (a) all relevant sentences (b) all relevant and some irrelevant sentences, or (c) a corpus. We show that a strong language model can partially solve these tasks, in particular when the relevant sentences are included in the input (e.g., 35% of trees for (a) are perfect), and with indications of generalization to other domains. This work is significant as it provides a new type of dataset (multistep entailments) and baselines, offering a new avenue for the community to generate richer, more systematic explanations.",
        "archiveprefix": "arXiv",
        "author": "Bhavana Dalvi and Peter Jansen and Oyvind Tafjord and Zhengnan Xie and Hannah Smith and Leighanna Pipatanangkura and Peter Clark",
        "doi": "10.48550/arXiv.2104.08661",
        "eprint": "2104.08661",
        "keywords": "Computation and Language (cs.CL), Artificial Intelligence (cs.AI)",
        "primaryclass": "cs.CL ,",
        "series": "arXiv",
        "title": "Explaining Answers with Entailment Trees",
        "type": "misc",
        "url": "https://arxiv.org/pdf/2104.08661",
        "year": "2022"
    },
    "dasgupta2023language": {
        "abstract": "Abstract reasoning is a key ability for an intelligent system. Large language models (LMs) achieve above-chance performance on abstract reasoning tasks, but exhibit many imperfections. However, human abstract reasoning is also imperfect. For example, human reasoning is affected by our real-world knowledge and beliefs, and shows notable \"content effects\"; humans reason more reliably when the semantic content of a problem supports the correct logical inferences. These content-entangled reasoning patterns play a central role in debates about the fundamental nature of human intelligence. Here, we investigate whether language models \u2014 whose prior expectations capture some aspects of human knowledge \u2014 similarly mix content into their answers to logical problems. We explored this question across three logical reasoning tasks: natural language inference, judging the logical validity of syllogisms, and the Wason selection task. We evaluate state of the art large language models, as well as humans, and find that the language models reflect many of the same patterns observed in humans across these tasks \u2014 like humans, models answer more accurately when the semantic content of a task supports the logical inferences. These parallels are reflected both in answer patterns, and in lower-level features like the relationship between model answer distributions and human response times. Our findings have implications for understanding both these cognitive effects in humans, and the factors that contribute to language model performance.",
        "archiveprefix": "arXiv",
        "author": "Ishita Dasgupta and Andrew K. Lampinen and Stephanie C. Y. Chan and Hannah R. Sheahan and Antonia Creswell and Dharshan Kumaran and James L. McClelland and Felix Hill",
        "doi": "10.48550/arXiv.2207.07051",
        "eprint": "2207.07051",
        "keywords": "Computation and Language (cs.CL), Artificial Intelligence (cs.AI), Machine Learning (cs.LG)",
        "primaryclass": "cs.CL ,",
        "series": "arXiv",
        "title": "Language models show human-like content effects on reasoning tasks",
        "type": "misc",
        "url": "https://arxiv.org/pdf/2207.07051",
        "year": "2023"
    },
    "song2023llmplanner": {
        "archiveprefix": "arXiv",
        "author": "Chan Hee Song and Jiaman Wu and Clayton Washington and Brian M. Sadler and Wei-Lun Chao and Yu Su",
        "doi": "doi.org/10.48550/arXiv.2212.04088",
        "eprint": "2212.04088",
        "keywords": "Artificial Intelligence (cs.AI), Computation and Language (cs.CL), Computer Vision and Pattern Recognition (cs.CV), Machine Learning (cs.LG), Robotics (cs.RO)",
        "primaryclass": "cs.AI",
        "series": "arXiv",
        "title": "LLM-Planner: Few-Shot Grounded Planning for Embodied Agents with Large Language Models",
        "type": "misc",
        "url": "https://arxiv.org/pdf/2212.04088",
        "year": "2023"
    },
    "wei2023chainofthought": {
        "abstract": "We explore how generating a chain of thought -- a series of intermediate reasoning steps -- significantly improves the ability of large language models to perform complex reasoning. In particular, we show how such reasoning abilities emerge naturally in sufficiently large language models via a simple method called chain of thought prompting, where a few chain of thought demonstrations are provided as exemplars in prompting. Experiments on three large language models show that chain of thought prompting improves performance on a range of arithmetic, commonsense, and symbolic reasoning tasks. The empirical gains can be striking. For instance, prompting a 540B-parameter language model with just eight chain of thought exemplars achieves state of the art accuracy on the GSM8K benchmark of math word problems, surpassing even finetuned GPT-3 with a verifier.",
        "archiveprefix": "arXiv",
        "author": "Jason Wei and Xuezhi Wang and Dale Schuurmans and Maarten Bosma and Brian Ichter and Fei Xia and Ed Chi and Quoc Le and Denny Zhou",
        "doi": "10.48550/arXiv.2201.11903",
        "eprint": "2201.11903",
        "keywords": "Computation and Language (cs.CL), Artificial Intelligence (cs.AI)",
        "primaryclass": "cs.CL ,",
        "series": "arXiv",
        "title": "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
        "type": "misc",
        "url": "https://arxiv.org/pdf/2201.11903",
        "year": "2023"
    },
    "zhang2022automatic": {
        "abstract": "Large language models (LLMs) can perform complex reasoning by generating intermediate reasoning steps. Providing these steps for prompting demonstrations is called chain-of-thought (CoT) prompting. CoT prompting has two major paradigms. One leverages a simple prompt like \u201cLet\u2019s think step by step\u201d to facilitate step-by-step thinking before answering a question. The other uses a few manual demonstrations one by one, each composed of a question and a reasoning chain that leads to an answer. The superior performance of the second paradigm hinges on the hand-crafting of task-specific demonstrations one by one. We show that such manual efforts may be eliminated by leveraging LLMs with the \u201cLet\u2019s think step by step\u201d prompt to generate reasoning chains for demonstrations one by one, i.e., let\u2019s think not just step by step, but also one by one. However, these generated chains often come with mistakes. To mitigate the effect of such mistakes, we find that diversity matters for automatically constructing demonstrations. We propose an automatic CoT prompting method: Auto- CoT. It samples questions with diversity and generates reasoning chains to construct demonstrations. On ten public benchmark reasoning tasks with GPT-3, Auto-CoT consistently matches or exceeds the performance of the CoT paradigm that requires manual designs of demonstrations. Code is available at https://github.com/amazon-research/auto-cot",
        "archiveprefix": "arXiv",
        "author": "Zhuosheng Zhang and Aston Zhang and Mu Li and Alex Smola",
        "doi": "10.48550/arXiv.2210.03493",
        "eprint": "2210.03493",
        "keywords": "Computation and Language (cs.CL), Artificial Intelligence (cs.AI)",
        "primaryclass": "cs.CL ,",
        "series": "arXiv",
        "title": "Automatic Chain of Thought Prompting in Large Language Models",
        "type": "misc",
        "url": "https://arxiv.org/pdf/2210.03493",
        "year": "2022"
    }
}});