import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const token = localStorage.getItem('access_token');

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://e-library-z7s7.onrender.com/deposit/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ amount }),
        }
      );

      if (response.ok) {
        console.log('Deposit successful');
        navigate('/profile');
      } else {
        throw new Error('Error depositing amount');
      }
    } catch (error) {
      console.error('Error depositing amount:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>E-Lit Emporium | Not Found</title>
      </Helmet>
      <div className="mx-auto max-w-md mt-8">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="p-4 sm:p-7">
            <p className="mt-2 mb-5 text-base text-gray-600">
              Use the form below to deposit amount
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex max-w-md flex-col gap-1"
            >
              <label>
                Amount:
                <input
                  className="w-full py-2 rounded px-4  bg-gray-100"
                  type="text"
                  value={amount}
                  onChange={handleChange}
                  required
                />
              </label>
              <button
                className="uppercase text-sm font-bold border-0 rounded px-4 py-2 bg-sky-500 hover:bg-sky-900"
                type="submit"
              >
                Deposit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
