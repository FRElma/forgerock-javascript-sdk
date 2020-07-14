import FRCallback from '.';
import { Callback, PolicyRequirement } from '../../auth/interfaces';
import { StringDict } from 'shared/interfaces';

/**
 * Represents a callback used to collect a valid platform password.
 */
class ValidatedCreatePasswordCallback extends FRCallback {
  /**
   * @param payload The raw payload returned by OpenAM
   */
  constructor(public payload: Callback) {
    super(payload);
  }

  /**
   * Gets the callback's failed policies.
   */
  public getFailedPolicies(): PolicyRequirement[] {
    return this.getOutputByName<PolicyRequirement[]>('failedPolicies', []);
  }

  /**
   * Gets the callback's applicable policies.
   */
  public getPolicies(): StringDict<any> {
    return this.getOutputByName<StringDict<any>>('policies', {});
  }

  /**
   * Gets the callback's prompt.
   */
  public getPrompt(): string {
    return this.getOutputByName<string>('prompt', '');
  }

  /**
   * Gets whether the password is required.
   */
  public isRequired(): boolean {
    return this.getOutputByName<boolean>('required', false);
  }

  /**
   * Sets the callback's password.
   */
  public setPassword(password: string): void {
    this.setInputValue(password);
  }

  /**
   * Set if validating value only.
   */
  public setValidateOnly(value: boolean): void {
    this.setInputValue(value, /validateOnly/);
  }
}

export default ValidatedCreatePasswordCallback;
