// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let CategorySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        index: true,
        required: true,
      },
      // Unique Field/s
      // {{FIELD_NAME}}: {
      //   type: {{String, Number, Boolean, Date, Mixed=>{}, Array=>[<TYPE>], ObjectId=>Schema.Types.ObjectId}},
      //   required: {{true, false}}, ]  # -or- [ {{true, false}}, '{{MESSAGE}}'
      //   unique: true,
      //   minlength: {{Number}} },
      //   maxlength: {{Number}} },
      //   min: {{Number|new Date('YYYY-MM-DD')}} },
      //   max: {{Number|new Date('YYYY-MM-DD')}} },
      //   enum: globals.{{DATA}}_TYPES,
      //   trim: true,
      //   validate: [
      //     {
      //       validator: function( value ) {
      //         return ...; # boolean /{{REGEX}}/.test( value );
      //       },
      //       message: '...{ VALUE }...'
      //     },
      //     ...
      //   ],
      // },
      // ...

      // Many-to-* Relationship/s
      // _{{FIELD_NAME}}: [{
      //   type: Schema.Types.ObjectId, ref: '',
      //   default: [],
      // }],
      // ...

      // One-to-* Relationship/s
      // _{{FIELD_NAME}}: {
      //   type: Schema.Types.ObjectId, ref: '',
      // },
      // ...
    },
    {
      timestamps: true,
    }
  );

  let Category = mongoose.model( 'Category', CategorySchema );
}
