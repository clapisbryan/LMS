import React from 'react'

const Notif = () => {
    return (
        <>
            <div className='absolute bottom-0 right-0'>
                <div role="alert" class="border-s-4 border-yellow-700 bg-yellow-50 p-1 w-80">
                    <div class="flex items-center gap-2 text-yellow-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                            <path
                                fill-rule="evenodd"
                                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <strong class="text-sm">The website is not fully completed yet.</strong>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notif
