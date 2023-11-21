'use client';
import { Button, Col, Divider, Input, Row } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  SearchOutlined,
  ArrowRightOutlined,
  ReloadOutlined,
  BookOutlined,
} from '@ant-design/icons';
import heroImage from '../../assets/hero.webp';
import Form from '../Forms/Form';
import FormInput from '../Forms/FormInput';
import { useCoursesQuery } from '@/redux/api/courseApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/navigation';
const Banner = () => {
  const query: Record<string, any> = { limit: 0 };
  const router = useRouter();
  const [course, setCourse] = useState<string>('');

  const publicOnSubmit = async (values: any) => {
    // console.log(values);
    // setSearchTerm(values.searchTerm);
    // setSearchTerm2(values.searchTerm2);
    // setLimit(15);
  };

  const { data, isLoading } = useCoursesQuery({ ...query });
  // console.log(data);

  const resetFilters = () => {
    setCourse('');
  };

  return (
    <div className='main-banner mb-32 mt-10  '>
      <div className='container'>
        <Row>
          <Col md={24} lg={14} className='column-banner'>
            <div className='mt-[110px]'>
              <h1 className='sg-title-txt'>
                <span className='text-pink-600'>Connect</span> with best
                teachers near you
              </h1>
              <p className='text-base mb-6 text-gray-500'>
                MSP Tutoring Service is a platform for highly dedicated teachers
                and students to fulfill the communication gap between students
                and teachers.
                <Link href='https://msp-tutoring-service.vercel.app/signup'>
                  Connect now!
                </Link>
              </p>
              <div className='search-box '>
                <div className='flex justify-between items-center  w-full space-x-1'>
                  <Input
                    name='course'
                    type='text'
                    placeholder='Course'
                    value={course}
                    bordered={false}
                    onChange={(e) => setCourse(e.target.value)}
                    className='py-2'
                  />

                  <>
                    <Link
                      href={{
                        pathname: '/search',
                        query: {
                          searchTerm: course,
                        },
                      }}
                      className='block py-[6px] '
                    >
                      <Button
                        onClick={resetFilters}
                        value='large'
                        className='hidden md:block  bg-[#335880]    text-white rounded-md  '
                      >
                        Find Now
                      </Button>
                    </Link>
                    <Link href={`/search`}>
                      <Button className=' md:hidden bg-[#335880]  text-white font-medium text-base px-3 py-1 rounded-md  cursor-pointer transition duration-700'>
                        <SearchOutlined />
                      </Button>
                    </Link>
                  </>
                </div>
              </div>
            </div>
            <div className='  rounded-b-lg p-4 col-span-3  '>
              {data?.courses?.map((item) => (
                <div className='' key={item.id}>
                  <Link href='/'>
                    <div className='flex justify-between items-center bg-red text-slate-600  '>
                      <p>{item.title}</p>
                      <p>
                        {item?.location} <ArrowRightOutlined className='ps-4' />
                      </p>
                    </div>
                    <Divider className=' my-2' />
                  </Link>
                  {/* <hr /> */}
                </div>
              ))}
            </div>
          </Col>
          <Col md={24} lg={10}>
            <div className='mt-[100px]'>
              <Image
                src={heroImage}
                width={500}
                alt='study ground hero image'
                className='img-fluid'
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
