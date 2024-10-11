import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-var': 'off',
    'vars-on-top': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'no-restricted-globals': 'off',
  },
})
