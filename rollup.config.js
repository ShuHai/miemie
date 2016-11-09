import buble from 'rollup-plugin-buble'
export default {
  entry: 'src/miemie.js',
  dest: 'dist/miemie.min.js',
  moduleName: 'miemie',
  plugins: [ buble() ],
  format: 'umd'
};