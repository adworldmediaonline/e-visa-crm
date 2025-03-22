import { apiEndpoints, fetchData } from '@/lib/api';
import {
  ArrowUpRightFromCircle,
  CheckCheck,
  CircleDashed,
  UsersRound,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const { data: indiaVisaData } = await fetchData(
    apiEndpoints.FIRST_STEP_VISA_REQUEST_FORM
  );
  console.log(indiaVisaData.length);
  const dataCard = [
    {
      id: 1,
      title: 'India',
      imgSrc: '/images/india.png',
      href: '/applicants',
      totalApplicants: indiaVisaData.length ?? '',
    },
    // {
    //   id: 2,
    //   title: 'Australia',
    //   imgSrc: '/images/australia.png',
    // },
    // {
    //   id: 3,
    //   title: 'Sri Lanka',
    //   imgSrc: '/images/srilanka.png',
    // },
    // {
    //   id: 4,
    //   title: 'Turkey',
    //   imgSrc: '/images/turkey.png',
    // },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 px-6">
      {dataCard.map((e, i) => (
        <div
          key={i}
          className=" bg-white p-6 rounded-xl shadow shadow-slate-300 space-y-2 border"
        >
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center space-x-2 relative">
              <div className="relative w-16 h-16">
                <Image
                  className="w-16 h-16 object-cover"
                  src={e.imgSrc}
                  alt={e.title ?? ''}
                  fill
                />
              </div>
              <h1 className="text-xl font-medium">{e.title}</h1>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <Link
                href={e?.href ?? '#'}
                className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-white bg-primary/70 hover:bg-primary"
              >
                <ArrowUpRightFromCircle />
                <span className="text-sm font-medium hidden md:block">
                  See More
                </span>
              </Link>
            </div>
          </div>
          <div className="text-sm">
            {/* <div className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
              <div className="inline-flex items-center space-x-2">
                <div>
                  <CircleDashed />
                </div>
                <div>Total Pending</div>
              </div>
              <div>
                <b>31</b>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
              <div className="inline-flex items-center space-x-2">
                <div>
                  <CheckCheck />
                </div>
                <div>Total Complete</div>
              </div>
              <div>
                <b>60</b>
              </div>
            </div> */}
            <div className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
              <div className="inline-flex items-center space-x-2">
                <div>
                  <UsersRound />
                </div>
                <div>Total Applicants</div>
              </div>
              <div>
                <b>{e?.totalApplicants ?? 0}</b>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
