import React, {useEffect} from 'react';
import Card from "@/src/common/components/card";
import Searchbar from "@/src/common/components/searchbar";

import UserTable from "@/src/common/components/table";
import Layout from "@/src/common/components/layout";

const ViewPage = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');

    useEffect(() => {}, [keyword])


    return (
        <Layout>
            <div className="w-full">
                <div className="m-10">
                    <div className="text-4xl font-semibold">All Books</div>
                    <div className="w-full flex justify-between mt-10">
                        <Searchbar onSearch={setKeyword}/> {/* add onSearch parameter and add a function to call api for searching*/}
                    </div>
                    <div>
                        <Card className="mt-10 p-5">
                            <div>
                                <UserTable keyword={keyword} />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ViewPage;