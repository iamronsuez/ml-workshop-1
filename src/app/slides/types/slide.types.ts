export type SlideType = 'title' | 'comparison' | 'concept' | 'case_intro' | 'demo' | 'results' | 'activity' | 'metrics' | 'inspiration' | 'action' | 'closing';

export interface BaseSlide {
  id: string;
  title: string;
  subtitle: string;
  type: SlideType;
  duration: string;
  notes: string;
}

export interface TitleSlide extends BaseSlide {
  type: 'title';
  content: {
    hook: string;
    examples: string[];
    power_phrase: string;
  };
}

export interface ComparisonSlide extends BaseSlide {
  type: 'comparison';
  content: {
    myths: Array<{
      myth: string;
      reality: string;
    }>;
    key_message: string;
  };
}

export interface ConceptSlide extends BaseSlide {
  type: 'concept';
  content: {
    simple_definition: string;
    analogies: Array<{
      title: string;
      desc: string;
    }>;
    examples_they_know: string[];
  };
}

export interface CaseIntroSlide extends BaseSlide {
  type: 'case_intro';
  content: {
    problem: string;
    scenarios: Array<{
      scenario: string;
      result: string;
      icon?: string;
      impact?: string;
    }>;
    solution: string;
    impact?: string;
    critical_facts?: string[];
  };
}

export interface DemoSlide extends BaseSlide {
  type: 'demo';
  content: {
    steps: Array<{
      step: string;
      time: string;
      detail: string;
    }>;
    question_for_audience: string;
    teaching_moment: string;
  };
}

export interface ResultsSlide extends BaseSlide {
  type: 'results';
  content: {
    metrics?: Array<{
      metric: string;
      value: string;
      grade: string;
      meaning: string;
    }>;
    comparison?: Record<string, string>;
    interpretation?: string;
    price_impact?: string;
    main_metric?: {
      name: string;
      value: string;
      interpretation: string;
    };
    reality_check?: string;
    is_it_good?: {
      question: string;
      answer: string;
      reasons: string[];
    };
    comparison_vs_food?: Record<string, string>;
    impact_calculation?: Record<string, string>;
  };
}

export interface ActivitySlide extends BaseSlide {
  type: 'activity';
  content: {
    scenario: string;
    roles: Array<{
      role: string;
      concern: string;
      preference?: string;
      decision_range?: string;
    }>;
    question: string;
    options: string[];
    teaching_moment: string;
  };
}

export interface MetricsSlide extends BaseSlide {
  type: 'metrics';
  content: {
    key_message: string;
    essential_metrics: Array<{
      name: string;
      simple: string;
      analogy: string;
    }>;
    practical_rules: string[];
  };
}

export interface InspirationSlide extends BaseSlide {
  type: 'inspiration';
  content: {
    real_examples: Array<{
      student: string;
      project: string;
      impact: string;
      quote: string;
    }>;
    key_insight: string;
  };
}

export interface ActionSlide extends BaseSlide {
  type: 'action';
  content: {
    immediate_actions: Array<{
      action: string;
      task: string;
      time: string;
    }>;
    resources: Array<{
      type: string;
      resource: string;
      value: string;
    }>;
    challenge: string;
  };
}

export interface ClosingSlide extends BaseSlide {
  type: 'closing';
  content: {
    what_they_learned: string[];
    impact_potential: Record<string, string>;
    final_challenge: string;
    call_to_action: string;
    power_phrase: string;
  };
}

export type Slide = 
  | TitleSlide 
  | ComparisonSlide 
  | ConceptSlide 
  | CaseIntroSlide 
  | DemoSlide 
  | ResultsSlide 
  | ActivitySlide 
  | MetricsSlide 
  | InspirationSlide 
  | ActionSlide 
  | ClosingSlide;