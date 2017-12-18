import { mount } from 'vue-test-utils'
import htmlBeautify from 'html-beautify'
import NiFormGroup from 'common/NiFormGroup'

describe('NiFormGroup', () => {
  let wrapper

  let propsData = {
    error: true,
    fieldId: 'sign-in-password',
    fieldLabel: 'Sign In Password'
  }

  beforeEach(() => {
    wrapper = mount(NiFormGroup, { propsData })
  })

  it('has a field id from props', () => {
    expect(wrapper.vm.fieldId).toContain('sign-in-password')
  })

  it('has the expected html structure', () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it('shows the label of the field', () => {
    expect(wrapper.find('.ni-form-group__label').html().toLowerCase())
      .toContain('sign in password')
  })

})
