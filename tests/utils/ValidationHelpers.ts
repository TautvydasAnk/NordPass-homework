export const ValidationHelpers = {
  getEnvVariable(variableName: string): string {
    const environmentVariable = process.env[variableName];
    if (!environmentVariable) {
      throw new Error(`Error getting environment variable with name ${variableName}!`);
    }
    return environmentVariable;
  },
};
