import { createLocalVue, shallowMount } from "@vue/test-utils"
import Vuelidate from "vuelidate"
import TmSessionSignUp from "common/TmSessionSignUp"

describe(`TmSessionSignUp`, () => {
  const localVue = createLocalVue()
  localVue.use(Vuelidate)

  let wrapper, $store

  beforeEach(() => {
    $store = {
      state: {
        session: { insecureMode: true },
        signup: {
          signUpName: ""
        }
      }
    }

    wrapper = shallowMount(TmSessionSignUp, {
      localVue,
      mocks: {
        $store,
        $router: {
          push: jest.fn()
        }
      },
      stubs: [`router-link`]
    })
  })

  it("renders", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
