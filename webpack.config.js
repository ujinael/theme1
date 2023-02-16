const path = require('path');
module.exports = {

  entry: './src/index.ts', 
  devtool: 'inline-source-map',

  module: {

    rules: [
      {
       options:{
        projectReferences:true
       },
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  
  output: {
    clean:true,
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};