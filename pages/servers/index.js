/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Layout from '../../Layout';
import ServersList from '../../components/servers/ServersList';
import { handleCountriesList } from '../../redux/action/servers';

import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { FaRegStar } from 'react-icons/fa';
import { Input, Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

function Servers() {
  const router = useRouter();

  const dispatch = useDispatch();
  const { loading, countries, error } = useSelector(state => state.servers);

  useEffect(() => {
    dispatch(handleCountriesList());
  }, []);

  const [searchKeyword, setSearchKeyword] = useState('');

  let tabs = [
    {
      id: 'all_servers',
      name: 'All Servers',
      default: true
    },
    {
      id: 'favorites',
      name: 'Favorites',
      default: false
    }
  ];

  const [favorite, setFavorite] = useState([]);

  const allServers = [
    {
      id: 1,
      name: 'PK',
      flag: '/assets/flags/pk.svg',
      ping: '80ms'
    },
    {
      id: 2,
      name: 'us',
      flag: '/assets/flags/us.svg',
      ping: '120ms'
    },
    {
      id: 3,
      name: 'ar',
      sub: 'Premium',
      flag: '/assets/flags/ar.svg',
      ping: '140ms'
    },
    {
      id: 4,
      name: 'bq',
      sub: 'Premium',
      flag: '/assets/flags/bq.svg',
      ping: '60ms'
    },
    {
      id: 5,
      sub: 'Premium',
      name: 'bw',
      flag: '/assets/flags/bw.svg',
      ping: '90ms'
    },
    {
      id: 6,
      sub: 'Premium',
      name: 'cu',
      flag: '/assets/flags/cu.svg',
      ping: '98ms'
    },
    {
      id: 7,
      sub: 'Premium',
      name: 'fj',
      flag: '/assets/flags/fj.svg',
      ping: '123ms'
    },
    {
      id: 8,
      name: 'eu',
      flag: '/assets/flags/eu.svg',
      ping: '321ms'
    },
    {
      id: 9,
      sub: 'Premium',
      name: 'gd',
      flag: '/assets/flags/gd.svg',
      ping: '123ms'
    },
    {
      id: 10,
      sub: 'Premium',
      name: 'lb',
      flag: '/assets/flags/lb.svg',
      ping: '100ms'
    }
  ];

  const [tabsState] = useState(tabs);

  const [selectedTab, setSelectedTab] = useState({
    id: 'all_servers',
    name: 'All Servers',
    default: true
  });

  const onChangeHandler = e => {
    const { name, value } = e.target;
    if (name === 'searchKeyword') setSearchKeyword(value);
  };

  const handleChangeTab = tab => {
    setSelectedTab(tab);
  };

  const handleFavorite = server => {
    const newFavorite = [...favorite];
    const index = newFavorite.findIndex(item => item._id === server._id);

    if (selectedTab.id === 'all_servers') {
      if (index === -1) {
        newFavorite.push(server);
      } else {
        newFavorite.splice(index, 1);
      }
    } else if (selectedTab.id === 'favorites') {
      if (index !== -1) {
        newFavorite.splice(index, 1);
      }
    }

    setFavorite(newFavorite);
  };

  const reset = () => {
    setSearchKeyword('');
  };

  return (
    <Layout title='Servers'>
      <div className='Servers'>
        <div className='Servers--header'>
          <HiOutlineArrowNarrowLeft
            className='Servers--header__goBack'
            color='secondary'
            size={24}
            onClick={() => router.back()}
          />
          <div className='Servers--header__search'>
            <FaSearch className='Servers--header__search--searchIcon' size={15} color='gray' />
            <MdCancel className='Servers--header__search--cancelIcon' size={15} color='gray' onClick={() => reset()} />
            <Input
              className='dataTable-filter'
              type='text'
              bsSize='sm'
              placeholder='Search...'
              id='searchKeyword'
              name='searchKeyword'
              value={searchKeyword}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className='Servers--tabs'>
          {tabsState.map((doc, index) => (
            <div key={index} className='Servers--tabs__tab'>
              <p
                onClick={() => handleChangeTab(doc)}
                className={doc.id === selectedTab.id ? 'Servers--tabs__tab--selected' : 'Servers--tabs__tab--unselected'}
              >
                {doc.name}
              </p>
            </div>
          ))}
        </div>

        {loading ? (
          <div className='Spinner'>
            <Spinner style={{ margin: '210px 0px' }} />
          </div>
        ) : (
          <div className='Servers--list'>
            {selectedTab.id === 'all_servers' ? (
              <div>
                {countries.map((item, index) => (
                  <ServersList key={index} flag={item?._id} name={item?._id} ping={item?.emoji} access={item?.accessType}>
                    <FaRegStar
                      size={16}
                      className={classNames({
                        'Servers--list__servers--ping--star': favorite.find(doc => doc._id === item?._id)
                      })}
                      onClick={() => {
                        handleFavorite(item);
                      }}
                    />
                  </ServersList>
                ))}
              </div>
            ) : selectedTab.id === 'favorites' ? (
              <div>
                {(favorite.length &&
                  favorite.map((item, index) => (
                    <ServersList key={index} flag={item?._id} name={item?._id} ping={item?.emoji} access={item?.accessType}>
                      <FaStar size={16} color='ffc10b' onClick={() => handleFavorite(item)} />
                    </ServersList>
                  ))) || <p style={{ marginTop: '20px' }}>No favorites yet</p>}
              </div>
            ) : null}

            {error && (
              <div className='Error'>
                <p className='text-danger'>{error.msg}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Servers;
