import React from 'react';

function FormField({label, name, type, value, onChange }) {
  return (
        <div>
            <label>
            {label} :
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                required
            />
            </label>
        </div>
  );
}

function FormField1({label, name, type, value, onChange }) {
    return (
          <div>
              <label>
              {label} :
              <textarea
                  type={type}
                  value={value}
                  name={name}
                  onChange={onChange}
                  required
              />
              </label>
          </div>
    );
  }


export { FormField, FormField1 }