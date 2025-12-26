
export interface ValidationFinding {
  severity: 'error' | 'warning' | 'info';
  message: string;
}

export interface DeviceConfig {
  deviceName: string;
  config: string;
  validationFindings: ValidationFinding[];
}

export interface AnalysisResult {
  deviceConfigs: DeviceConfig[];
  ansiblePlaybook: string;
  assessment: string;
  recommendations: string[];
  topologySketch?: string;
}
